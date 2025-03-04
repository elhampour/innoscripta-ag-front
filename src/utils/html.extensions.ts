const HtmlExtensions = {
  htmlToText: (htmlString: string): string => {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  },
};

export default HtmlExtensions;
