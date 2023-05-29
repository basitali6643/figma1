import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page1',
    loadChildren: () => import('./page1/page1.module').then( m => m.Page1PageModule)
  },
  {
    path: 'page2',
    loadChildren: () => import('./page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'page3',
    loadChildren: () => import('./page3/page3.module').then( m => m.Page3PageModule)
  },
  {
    path: 'page4',
    loadChildren: () => import('./page4/page4.module').then( m => m.Page4PageModule)
  },
  {
    path: 'page5',
    loadChildren: () => import('./page5/page5.module').then( m => m.Page5PageModule)
  },
  {
    path: 'page6',
    loadChildren: () => import('./page6/page6.module').then( m => m.Page6PageModule)
  },
  {
    path: 'page7',
    loadChildren: () => import('./page7/page7.module').then( m => m.Page7PageModule)
  },
  {
    path: 'page8',
    loadChildren: () => import('./page8/page8.module').then( m => m.Page8PageModule)
  },
  {
    path: 'page9',
    loadChildren: () => import('./page9/page9.module').then( m => m.Page9PageModule)
  },
  {
    path: 'page10',
    loadChildren: () => import('./page10/page10.module').then( m => m.Page10PageModule)
  },
  {
    path: 'page11',
    loadChildren: () => import('./page11/page11.module').then( m => m.Page11PageModule)
  },
  {
    path: 'page12',
    loadChildren: () => import('./page12/page12.module').then( m => m.Page12PageModule)
  },
  {
    path: 'page13',
    loadChildren: () => import('./page13/page13.module').then( m => m.Page13PageModule)
  },
  {
    path: 'page14',
    loadChildren: () => import('./page14/page14.module').then( m => m.Page14PageModule)
  },
  {
    path: 'page15',
    loadChildren: () => import('./page15/page15.module').then( m => m.Page15PageModule)
  },
  {
    path: 'page16',
    loadChildren: () => import('./page16/page16.module').then( m => m.Page16PageModule)
  },
  {
    path: 'page17',
    loadChildren: () => import('./page17/page17.module').then( m => m.Page17PageModule)
  },
  {
    path: 'page18',
    loadChildren: () => import('./page18/page18.module').then( m => m.Page18PageModule)
  },
  {
    path: 'page19',
    loadChildren: () => import('./page19/page19.module').then( m => m.Page19PageModule)
  },
  {
    path: 'page20',
    loadChildren: () => import('./page20/page20.module').then( m => m.Page20PageModule)
  },
  {
    path: 'page21',
    loadChildren: () => import('./page21/page21.module').then( m => m.Page21PageModule)
  },
  {
    path: 'page22',
    loadChildren: () => import('./page22/page22.module').then( m => m.Page22PageModule)
  },
  {
    path: 'page23',
    loadChildren: () => import('./page23/page23.module').then( m => m.Page23PageModule)
  },
  {
    path: 'page24',
    loadChildren: () => import('./page24/page24.module').then( m => m.Page24PageModule)
  },
  {
    path: 'page25',
    loadChildren: () => import('./page25/page25.module').then( m => m.Page25PageModule)
  },
  {
    path: 'page26',
    loadChildren: () => import('./page26/page26.module').then( m => m.Page26PageModule)
  },
  {
    path: 'page27',
    loadChildren: () => import('./page27/page27.module').then( m => m.Page27PageModule)
  },
  {
    path: 'page28',
    loadChildren: () => import('./page28/page28.module').then( m => m.Page28PageModule)
  },
  {
    path: 'page29',
    loadChildren: () => import('./page29/page29.module').then( m => m.Page29PageModule)
  },
  {
    path: 'page30',
    loadChildren: () => import('./page30/page30.module').then( m => m.Page30PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
