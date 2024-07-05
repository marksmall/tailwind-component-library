import { ReactNode } from 'react';

import { RenderHookOptions, RenderHookResult, render, renderHook } from '@testing-library/react';

type WrapperParams = {
  children: ReactNode;
};

type Options = {
  initialEntries?: string[];
  renderHookOptions?: RenderHookOptions<unknown>;
};

// const queryClientConfig: QueryClientConfig = {};

/**
 * A custom testing-library component renderer that wraps the component being
 * rendered with any Providers used in the app. Any test can pre-configure the
 * Providers, to be in any state they wish.
 *
 * @param ui The component to render.
 * @param options The options to configure any providers.
 *
 * @returns The rendered component.
 */
const customRender = (ui: ReactNode, options?: Options) => {
  const { renderHookOptions } = options ?? {};

  return render(ui, {
    wrapper: ({ children }: WrapperParams): ReactNode => <>{children}</>,
    ...renderHookOptions,
  });
};

/**
 * A custom testing-library hook renderer that wraps the hook being rendered
 * with any Providers used in the app. Any test can pre-configure the
 * Providers, to be in any state they wish.
 *
 * @param callback A function wrapping the hook being rendered.
 * @param options The options to configure any providers.
 *
 * @returns The rendered hook.
 */
const customRenderHook = <T, P>(
  callback: () => unknown,
  options?: Options,
): RenderHookResult<T, P> => {
  const { renderHookOptions } = options ?? {};

  const wrapper = ({ children }: WrapperParams): ReactNode => <>{children}</>;

  const utils = renderHook(() => callback(), { wrapper, ...renderHookOptions });

  return utils as RenderHookResult<T, P>;
};

// eslint-disable-next-line import/export
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

// Override render export with our custom render function.
// eslint-disable-next-line import/export
export { customRender as render };

// Override renderHook export with our custom renderHook function.
// eslint-disable-next-line import/export
export { customRenderHook as renderHook };
