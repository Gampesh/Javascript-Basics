"use strict";
exports.__esModule = true;
exports.routes = [
    { path: '', component: LayoutComponent, canActivate: [AuthGuard],
        children: [
            { path: 'product-detail/:category/:partner/:title/:productId', canActivate: [AuthGuard],
                loadChildren: function () { return new Promise(function (resolve) {
                    require.ensure([], function (require) {
                        resolve(require('app/product-detail/product-detail.module')['ProductDetailModule']);
                    });
                }); }
            }
        ] },
    { path: 'error/:status-code/:status-text', pathMatch: 'full', component: CustomErrorComponent },
    { path: 'error', pathMatch: 'full', component: CustomErrorComponent },
    { path: '**', component: NotFoundComponent }
];
exports.routing = RouterModule.forRoot(exports.routes);
