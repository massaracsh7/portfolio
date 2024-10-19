import globalClassNames from "../../style.d";
declare const classNames: typeof globalClassNames & {
  readonly header: "header";
  readonly logo: "logo";
  readonly navigation: "navigation";
  readonly navList: "navList";
};
export = classNames;
