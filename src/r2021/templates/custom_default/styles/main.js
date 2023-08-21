$(function () {
  function setupAnchorJs(anchorsObj) {
    if (anchorsObj && anchorsObj.options) {
      anchorsObj.options.placement = "left";
      anchorsObj.options.visible = "hover";
      anchorsObj.removeAll();
      anchorsObj.add();
    }
  }

  function setupHighlightJs(hljsObj) {
    if (!hljsObj) {
      return;
    }

    hljsObj.initHighlightingOnLoad();
    hljsObj.initLineNumbersOnLoad();

    function selectText(element) {
      var range = document.createRange();

      range.setStartBefore(element);
      range.setEndAfter(element);

      let selection = document.getSelection();

      selection.removeAllRanges();
      selection.addRange(range);
    }

    let codeElements = document.querySelectorAll("pre code");

    if (codeElements != null && codeElements.length > 0) {
      codeElements.forEach(function (el) {
        el.addEventListener("click", (e) => {
          if (e.target.closest("td.hljs-ln-line.hljs-ln-numbers")) {
            let trElement = e.target.closest("tr");
            let actualCodeElement = trElement.querySelector(".hljs-ln-code");

            if (actualCodeElement != null) {
              selectText(actualCodeElement);
            }
          }
        });
      });
    }
  }

  function extractRootedHref(href) {
    if (!href) {
      return href;
    }

    // strip scheme
    let result = href.replace(/https?:\/\//gi, "");
    // strip host
    if (result.indexOf(location.host) === -1) {
      // only consider internal links
      return href;
    }

    const rootIndex = result.indexOf("/");
    result = result.substring(rootIndex);

    return result;
  }

  /** expand toc when href points to path instead of path/index.html */
  function expandToc() {
    function update(selected) {
      selected.each((i, e) => {
        const hrefWithoutPage = extractRootedHref(e.href).replace(
          /index.html?$/gi,
          ""
        );
        if (hrefWithoutPage === location.pathname) {
          let current = $(e).parent();
          while (current.attr("id") !== "sidetoc") {
            if (current.prop("tagName") === "LI") {
              current.addClass("in active");
            }
            current = current.parent();
          }
        }
      });
    }
    waitForElements("#sidetoc li > a[href]").done(update);
  }

  function waitForElements(selector, retries, timeout) {
    const result = $.Deferred();
    let retry = 0;
    retries = retries || 3;
    timeout = timeout || 100;
    const waitForElement = setInterval(() => {
      const selected = $(selector);
      if (retry === retries || selected.length) {
        clearInterval(waitForElement);
        result.resolve(selected);
      }
      retry++;
    }, timeout);
    return result;
  }

  function calculateTargetVersionInfo(version) {
    const currentHref =
      document.location.pathname +
      document.location.search +
      document.location.hash;

    const segments = currentHref.split("/");
    const targetVersion = version || segments[1];
    segments[1] = version;
    const targetHref = segments.join("/");

    return {
      currentHref,
      targetHref,
      targetVersion,
    };
  }

  function switchVersion(version) {
    const targetHref = calculateTargetVersionInfo(version).targetHref;
    // switch to existing page if exists
    $.ajax({
      type: "HEAD",
      url: targetHref,
      success: function () {
        document.location.href = targetHref;
      },
      error: function () {
        document.location.href = `/${version}/index.html`;
      },
    });
  }

  function setupVersionSelector() {
    const $versionSelect = $("#version-select");
    if (!$versionSelect.length) {
      return;
    }

    $versionSelect.val(calculateTargetVersionInfo().targetVersion);

    $versionSelect.on("change", function (e) {
      switchVersion(this.value); 
    });
  }

  function setupVersionReset() {
    const $currentVersion = $("#version-select option:first");
    if (!$currentVersion.length) {
      return;
    }

    $(".version-reset-link").on('click', function() {
      switchVersion($currentVersion.val()); 
    }); 
  }

  function setupVersionedTitle() {
      document.title = document.title + ' - 2021';
  }

  setupAnchorJs(anchors);
  setupHighlightJs(hljs);
  setupVersionSelector();
  setupVersionReset();
  setupVersionedTitle();

  expandToc();
});
