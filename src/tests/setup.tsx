import "@testing-library/jest-dom";
import { afterEach, beforeEach, vi } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { LanguageProvider } from "../core/contexts/LanguageContext/LanguageProvider";
import { ThemeProvider } from "../core/contexts/ThemeContext/ThemeProvider";

beforeEach(() => {
  document.body.innerHTML = '<div id="root"></div>';
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

export function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
}

export function renderWithProviders(ui: React.ReactElement) {
  const queryClient = createTestQueryClient();

  return {
    queryClient,
    ...render(ui, {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <LanguageProvider>
          <ThemeProvider>
            <QueryClientProvider client={queryClient}>
              <BrowserRouter>{children}</BrowserRouter>
            </QueryClientProvider>
          </ThemeProvider>
        </LanguageProvider>
      ),
    }),
  };
}

export function renderWithNavigation(
  ui: React.ReactElement,
  initialEntries = ["/"],
) {
  const queryClient = createTestQueryClient();

  return {
    queryClient,
    ...render(ui, {
      wrapper: ({ children }) => (
        <LanguageProvider>
          <ThemeProvider>
            <QueryClientProvider client={queryClient}>
              <MemoryRouter initialEntries={initialEntries}>
                {children}
              </MemoryRouter>
            </QueryClientProvider>
          </ThemeProvider>
        </LanguageProvider>
      ),
    }),
  };
}
