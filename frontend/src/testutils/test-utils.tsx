import { Provider } from "react-redux";
import { render as rtlRender, RenderResult } from "@testing-library/react";
import { createStore } from "redux";
import { ReactElement, JSXElementConstructor } from "react";

function render(
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  {
    initialState = {},
    store = createStore((a) => a, initialState),
    ...renderOptions
  } = {}
): RenderResult {
  function Wrapper({ children }): any {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { render };
