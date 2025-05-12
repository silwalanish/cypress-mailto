declare namespace Cypress {
  interface ApplicationWindow {
    location: {
      href: {
        set: (url: string) => void;
        get: () => string;
      };
    };

    open: (
      url: string,
      target?: string,
      windowFeatures?: string,
    ) => WindowProxy | null;
  }
}
