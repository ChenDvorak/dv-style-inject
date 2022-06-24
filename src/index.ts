type Style = {
  /**
   * content of style to append to head
   */
  css: string;
  /**
   * skip or cover if style with unique is exist
   */
  repeat?: "skip" | "cover";
  /**
   * set the style unique string, if pass this argument, the old style target which has same unique will delete
   */
  unique?: string;
};

const DV_STYLE_UNIQUE = "data-dv-style-unique";

export function styleInject(style: Style): void {
  if (!document || !document.head || !style || !style.css) {
    console.warn(
      "document is not defined or document.head is not defined or argument style not passed or argument style.css not passed."
    );
    return;
  }
  const head = document.head;

  if (!style.unique) {
    head.appendChild(createStyleElement(style));
    return;
  }

  const existElement = head.querySelector(
    `style[${DV_STYLE_UNIQUE}="${style.unique}"]`
  );

  if (existElement) {
    if (!style.repeat || style.repeat === "skip") {
      return;
    }
    head.replaceChild(createStyleElement(style), existElement);
    return;
  }

  head.appendChild(createStyleElement(style));

  function createStyleElement(style: Style) {
    const styleElement = document.createElement("style");
    styleElement.setAttribute("type", "text/css");
    style.unique && styleElement.setAttribute(DV_STYLE_UNIQUE, style.unique);
    styleElement.textContent = style.css;
    return styleElement;
  }
}
