declare namespace Cypress {
  interface ApplicationWindow {
    location: {
      href: string;
    };

    open: (
      url: string,
      target?: string,
      windowFeatures?: string,
    ) => WindowProxy | null;
  }
}
