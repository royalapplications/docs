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

  /** expand toc when href points to path instead of path/index.html */
  function expandToc() {
    let retry = 0;
    const waitForElement = setInterval(() => {
      if (retry === 3 || $("#sidetoc li > a").length) {
        clearInterval(waitForElement);
        update();
      }
      retry++;
    }, 100);

    function update() {
      $("#sidetoc li > a").each((i, e) => {
        let href = e.href
          .replace(/https?:\/\//gi, "")
          .replace(/index.html?$/gi, "");

        href = href.substring(href.indexOf("/"));

        if (href === location.pathname) {
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
  }

  setupAnchorJs(anchors);
  setupHighlightJs(hljs);
  expandToc();
});
