export const routes: Routes = [
    { path: '', component: LayoutComponent , canActivate: [ AuthGuard ],
        children: [
            { path: 'product-detail/:category/:partner/:title/:productId', canActivate: [ AuthGuard ],
                loadChildren: () => new Promise(function (resolve) {
                    (require as any).ensure([], function (require: any) {
                        resolve(require('app/product-detail/product-detail.module')['ProductDetailModule']);
                    });
                })
            }
        ]},
    { path: 'error/:status-code/:status-text', pathMatch: 'full', component: CustomErrorComponent},
    { path: 'error', pathMatch: 'full', component: CustomErrorComponent},
    { path: '**', component: NotFoundComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
