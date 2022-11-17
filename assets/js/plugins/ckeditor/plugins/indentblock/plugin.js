/*
 Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function () {
  function f(b, c, a) {
    if (!b.getCustomData("indent_processed")) {
      let d = this.editor;
      const l = this.isIndent;
      if (c) {
        d = b.$.className.match(this.classNameRegex);
        a = 0;
        d && ((d = d[1]), (a = CKEDITOR.tools.indexOf(c, d) + 1));
        if ((a += l ? 1 : -1) < 0) return;
        a = Math.min(a, c.length);
        a = Math.max(a, 0);
        b.$.className = CKEDITOR.tools.ltrim(
          b.$.className.replace(this.classNameRegex, "")
        );
        a > 0 && b.addClass(c[a - 1]);
      } else {
        c = m(b, a);
        a = parseInt(b.getStyle(c), 10);
        const g = d.config.indentOffset || 40;
        isNaN(a) && (a = 0);
        a += (l ? 1 : -1) * g;
        if (a < 0) return;
        a = Math.max(a, 0);
        a = Math.ceil(a / g) * g;
        b.setStyle(c, a ? a + (d.config.indentUnit || "px") : "");
        b.getAttribute("style") === "" && b.removeAttribute("style");
      }
      CKEDITOR.dom.element.setMarker(this.database, b, "indent_processed", 1);
    }
  }
  function m(b, c) {
    return (c || b.getComputedStyle("direction")) == "ltr"
      ? "margin-left"
      : "margin-right";
  }
  const h = CKEDITOR.dtd.$listItem;
  const p = CKEDITOR.dtd.$list;
  const k = CKEDITOR.TRISTATE_DISABLED;
  const n = CKEDITOR.TRISTATE_OFF;
  CKEDITOR.plugins.add("indentblock", {
    requires: "indent",
    init(b) {
      function c() {
        a.specificDefinition.apply(this, arguments);
        this.allowedContent = {
          "div h1 h2 h3 h4 h5 h6 ol p pre ul": {
            propertiesOnly: !0,
            styles: d ? null : "margin-left,margin-right",
            classes: d || null
          }
        };
        this.contentTransformations = [
          ["div: splitMarginShorthand"],
          ["h1: splitMarginShorthand"],
          ["h2: splitMarginShorthand"],
          ["h3: splitMarginShorthand"],
          ["h4: splitMarginShorthand"],
          ["h5: splitMarginShorthand"],
          ["h6: splitMarginShorthand"],
          ["ol: splitMarginShorthand"],
          ["p: splitMarginShorthand"],
          ["pre: splitMarginShorthand"],
          ["ul: splitMarginShorthand"]
        ];
        this.enterBr && (this.allowedContent.div = !0);
        this.requiredContent =
          (this.enterBr ? "div" : "p") +
          (d ? `(${d.join(",")})` : "{margin-left}");
        this.jobs = {
          20: {
            refresh(a, b) {
              var e = b.block || b.blockLimit;
              if (!e.is(h))
                var c = e.getAscendant(h),
                  e = (c && b.contains(c)) || e;
              e.is(h) && (e = e.getParent());
              if (this.enterBr || this.getContext(b)) {
                if (d) {
                  var c = d;
                  var e = e.$.className.match(this.classNameRegex);
                  const f = this.isIndent;
                  var c = e ? (f ? e[1] != c.slice(-1) : !0) : f;
                  return c ? n : k;
                }
                return this.isIndent
                  ? n
                  : e
                  ? CKEDITOR[
                      (parseInt(e.getStyle(m(e)), 10) || 0) <= 0
                        ? "TRISTATE_DISABLED"
                        : "TRISTATE_OFF"
                    ]
                  : k;
              }
              return k;
            },
            exec(a) {
              var b = a.getSelection();
              var b = b && b.getRanges()[0];
              let c;
              if ((c = a.elementPath().contains(p))) f.call(this, c, d);
              else
                for (
                  b = b.createIterator(),
                    a = a.config.enterMode,
                    b.enforceRealBlocks = !0,
                    b.enlargeBr = a != CKEDITOR.ENTER_BR;
                  (c = b.getNextParagraph(a == CKEDITOR.ENTER_P ? "p" : "div"));

                )
                  c.isReadOnly() || f.call(this, c, d);
              return !0;
            }
          }
        };
      }
      var a = CKEDITOR.plugins.indent;
      var d = b.config.indentClasses;
      a.registerCommands(b, {
        indentblock: new c(b, "indentblock", !0),
        outdentblock: new c(b, "outdentblock")
      });
      CKEDITOR.tools.extend(c.prototype, a.specificDefinition.prototype, {
        context: {
          div: 1,
          dl: 1,
          h1: 1,
          h2: 1,
          h3: 1,
          h4: 1,
          h5: 1,
          h6: 1,
          ul: 1,
          ol: 1,
          p: 1,
          pre: 1,
          table: 1
        },
        classNameRegex: d
          ? new RegExp(`(?:^|\\s+)(${d.join("|")})(?\x3d$|\\s)`)
          : null
      });
    }
  });
})();