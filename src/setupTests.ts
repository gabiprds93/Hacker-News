import { render as rtlRender } from "@testing-library/react";

export const render = (ui: React.ReactElement) => {
  // Return renderer function with base options set
  return {
    ...rtlRender(ui),
  };
};
