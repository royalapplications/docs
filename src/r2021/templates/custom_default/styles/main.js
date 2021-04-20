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

  /** Adds the second segment of the active header nav link prefixed with "ra-" as css class to the element with the id "wrapper". */
  function setupProductCss() {
    function update(selected) {
      selected.each((i, e) => {
        var segments = extractRootedHref(e.href).split("/");
        if (segments.length > 2) {
          $("#wrapper").addClass("ra-" + segments[2].toLowerCase());
        }
      });
    }
    waitForElements("#navbar ul.nav.level1 > li > a.active[href]").done(update);
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

  setupProductCss();
  setupAnchorJs(anchors);
  setupHighlightJs(hljs);
  expandToc();
});
