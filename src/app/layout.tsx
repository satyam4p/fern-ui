import { DevtoolsProvider } from "@providers/devtools";
import { useNotificationProvider } from "@refinedev/antd";
import { GitHubBanner, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider from "@refinedev/nextjs-router";
import { Metadata } from "next";
import { cookies } from "next/headers";
import React, { Suspense } from "react";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ColorModeContextProvider } from "@contexts/color-mode";
import { dataProvider } from "@providers/data-provider";
import "@refinedev/antd/dist/reset.css";

export const metadata: Metadata = {
  title: "Refine",
  description: "Generated by create refine app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  const defaultMode = theme?.value === "dark" ? "dark" : "light";

  return (
    <html lang="en">
      <body>
        <Suspense>
          <RefineKbarProvider>
            <AntdRegistry>
              <ColorModeContextProvider defaultMode={defaultMode}>
                <DevtoolsProvider>
                  <Refine
                    routerProvider={routerProvider}
                    dataProvider={dataProvider}
                    notificationProvider={useNotificationProvider}
                    resources={[
                      // {
                      //   name: "blog_posts",
                      //   list: "/blog-posts",
                      //   create: "/blog-posts/create",
                      //   edit: "/blog-posts/edit/:id",
                      //   show: "/blog-posts/show/:id",
                      //   meta: {
                      //     canDelete: true,
                      //   },
                      // },
                      // {
                      //   name: "categories",
                      //   list: "/categories",
                      //   create: "/categories/create",
                      //   edit: "/categories/edit/:id",
                      //   show: "/categories/show/:id",
                      //   meta: {
                      //     canDelete: true,
                      //   },
                      // },
                      {
                        name: "testrun/",
                        list: "/test-runs",
                        create: "/test-runs/create",
                        edit: "/test-runs/edit/:id",
                        show: "/test-runs/show/:id",
                        meta: {
                          canDelete: false,
                        },
                      },
                    ]}
                    options={{
                      syncWithLocation: true,
                      warnWhenUnsavedChanges: true,
                      useNewQueryKeys: true,
                      projectId: "MZCNfo-62UmME-w5u49O",
                    }}
                  >
                    {children}
                    <RefineKbar />
                  </Refine>
                </DevtoolsProvider>
              </ColorModeContextProvider>
            </AntdRegistry>
          </RefineKbarProvider>
        </Suspense>
      </body>
    </html>
  );
}
