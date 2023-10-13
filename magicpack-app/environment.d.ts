declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_COLOR_THEME: string;
      NEXT_PUBLIC_COMPANY_LOGO_PATH: string;
      NEXT_PUBLIC_COMPANY_LOGO_WIDTH: number;
      NEXT_PUBLIC_PAGE_TITLE: string;
      NEXT_PUBLIC_PAGE_DESC1: string;
      NEXT_PUBLIC_PAGE_DESC2: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
