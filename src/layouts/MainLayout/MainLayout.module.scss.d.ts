import globalClassNames from "../../style.d";
declare const classNames: typeof globalClassNames & {
  readonly layout: "layout";
  readonly content: "content";
};
export = classNames;
