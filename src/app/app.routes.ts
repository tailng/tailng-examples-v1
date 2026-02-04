import { Routes } from '@angular/router';
import { categories } from './shared/types/component.types';

// Import component-specific routes
import { autocompleteRoutes } from './pages/component/forms/autocomplete/autocomplete.routes';
import { checkboxRoutes } from './pages/component/forms/checkbox/checkbox.routes';
import { chipsRoutes } from './pages/component/forms/chips/chips.routes';
import { datepickerRoutes } from './pages/component/forms/datepicker/datepicker.routes';
import { timepickerRoutes } from './pages/component/forms/timepicker/timepicker.routes';
import { formfieldRoutes } from './pages/component/forms/form-field/form-field.routes';
import { textinputRoutes } from './pages/component/forms/text-input/text-input.routes';
import { numberinputRoutes } from './pages/component/forms/number-input/number-input.routes';
import { textareaRoutes } from './pages/component/forms/textarea/textarea.routes';
import { fileuploadRoutes } from './pages/component/forms/file-upload/file-upload.routes';
import { radiobuttonRoutes } from './pages/component/forms/radio-button/radio-button.routes';
import { selectRoutes } from './pages/component/forms/select/select.routes';
import { sliderRoutes } from './pages/component/forms/slider/slider.routes';
import { slidetoggleRoutes } from './pages/component/forms/slide-toggle/slide-toggle.routes';
import { buttontoggleRoutes } from './pages/component/buttons/button-toggle/button-toggle.routes';
import { buttonRoutes } from './pages/component/buttons/button/button.routes';
import { badgeRoutes } from './pages/component/buttons/badge/badge.routes';
import { tagRoutes } from './pages/component/buttons/tag/tag.routes';
import { iconRoutes } from './pages/component/buttons/icon/icon.routes';
import { ripplesRoutes } from './pages/component/buttons/ripples/ripples.routes';
import { progressbarRoutes } from './pages/component/buttons/progress-bar/progress-bar.routes';
import { progressspinnerRoutes } from './pages/component/buttons/progress-spinner/progress-spinner.routes';
import { skeletonRoutes } from './pages/component/buttons/skeleton/skeleton.routes';
import { cardRoutes } from './pages/component/layout/card/card.routes';
import { dividerRoutes } from './pages/component/layout/divider/divider.routes';
import { expansionpanelRoutes } from './pages/component/layout/expansion-panel/expansion-panel.routes';
import { tabsRoutes } from './pages/component/layout/tabs/tabs.routes';
import { accordionRoutes } from './pages/component/layout/accordion/accordion.routes';
import { menuRoutes } from './pages/component/navigation/menu/menu.routes';
import { sidenavRoutes } from './pages/component/navigation/sidenav/sidenav.routes';
import { drawerRoutes } from './pages/component/navigation/drawer/drawer.routes';
import { stepperRoutes } from './pages/component/navigation/stepper/stepper.routes';
import { paginatorRoutes } from './pages/component/navigation/paginator/paginator.routes';
import { breadcrumbsRoutes } from './pages/component/navigation/breadcrumbs/breadcrumbs.routes';
import { dialogRoutes } from './pages/component/overlay/dialog/dialog.routes';
import { snackbarRoutes } from './pages/component/overlay/snackbar/snackbar.routes';
import { tooltipRoutes } from './pages/component/overlay/tooltip/tooltip.routes';
import { popoverRoutes } from './pages/component/overlay/popover/popover.routes';
import { connectedoverlayRoutes } from './pages/component/overlay-primitives/connected-overlay/connected-overlay.routes';
import { optionlistRoutes } from './pages/component/overlay-primitives/option-list/option-list.routes';
import { tableRoutes } from './pages/component/data/table/table.routes';
import { sortheaderRoutes } from './pages/component/data/sort-header/sort-header.routes';
import { filterheaderRoutes } from './pages/component/data/filter-header/filter-header.routes';
import { treeRoutes } from './pages/component/data/tree/tree.routes';
import { virtualscrollRoutes } from './pages/component/data/virtual-scroll/virtual-scroll.routes';
import { emptystateRoutes } from './pages/component/data/empty-state/empty-state.routes';
import { codeblockRoutes } from './pages/component/utilities/code-block/code-block.routes';
import { copybuttonRoutes } from './pages/component/utilities/copy-button/copy-button.routes';

// Map component routes to their route configurations
const componentRoutesMap: Record<string, Routes> = {
  '/forms/autocomplete': autocompleteRoutes,
  '/forms/checkbox': checkboxRoutes,
  '/forms/chips': chipsRoutes,
  '/forms/datepicker': datepickerRoutes,
  '/forms/timepicker': timepickerRoutes,
  '/forms/form-field': formfieldRoutes,
  '/forms/text-input': textinputRoutes,
  '/forms/number-input': numberinputRoutes,
  '/forms/textarea': textareaRoutes,
  '/forms/file-upload': fileuploadRoutes,
  '/forms/radio-button': radiobuttonRoutes,
  '/forms/select': selectRoutes,
  '/forms/slider': sliderRoutes,
  '/forms/slide-toggle': slidetoggleRoutes,
  '/buttons/button-toggle': buttontoggleRoutes,
  '/buttons/button': buttonRoutes,
  '/buttons/badge': badgeRoutes,
  '/buttons/tag': tagRoutes,
  '/buttons/icon': iconRoutes,
  '/buttons/ripples': ripplesRoutes,
  '/buttons/progress-bar': progressbarRoutes,
  '/buttons/progress-spinner': progressspinnerRoutes,
  '/buttons/skeleton': skeletonRoutes,
  '/layout/card': cardRoutes,
  '/layout/divider': dividerRoutes,
  '/layout/expansion-panel': expansionpanelRoutes,
  '/layout/tabs': tabsRoutes,
  '/layout/accordion': accordionRoutes,
  '/navigation/menu': menuRoutes,
  '/navigation/sidenav': sidenavRoutes,
  '/navigation/drawer': drawerRoutes,
  '/navigation/stepper': stepperRoutes,
  '/navigation/paginator': paginatorRoutes,
  '/navigation/breadcrumbs': breadcrumbsRoutes,
  '/overlay/dialog': dialogRoutes,
  '/overlay/snackbar': snackbarRoutes,
  '/overlay/tooltip': tooltipRoutes,
  '/overlay/popover': popoverRoutes,
  '/overlay-primitives/connected-overlay': connectedoverlayRoutes,
  '/overlay-primitives/option-list': optionlistRoutes,
  '/data/table': tableRoutes,
  '/data/sort-header': sortheaderRoutes,
  '/data/filter-header': filterheaderRoutes,
  '/data/tree': treeRoutes,
  '/data/virtual-scroll': virtualscrollRoutes,
  '/data/empty-state': emptystateRoutes,
  '/utilities/code-block': codeblockRoutes,
  '/utilities/copy-button': copybuttonRoutes,
};

// Helper function to generate lazy-loaded routes for components
function generateComponentRoutes() {
  const routes: Routes = [];

  // Add home route
  routes.push({
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  });

  // Generate routes for each component
  categories.forEach((category) => {
    category.components.forEach((component) => {
      // Convert route from '/forms/text-input' to 'forms/text-input'
      const routePath = component.route.startsWith('/') ? component.route.substring(1) : component.route;

      // Check if component has specific routes defined
      const componentRoutes = componentRoutesMap[component.route];
      if (componentRoutes && componentRoutes.length > 0) {
        routes.push({
          path: routePath,
          children: componentRoutes,
        });
      } else {
        // Component structure not created yet - skip with warning
        console.warn(
          `Component-specific routes not found for ${component.route}. ` +
          `Run: node scripts/generate-component.js ${component.route}`
        );
      }
    });
  });

  // Catch-all route for 404
  routes.push({
    path: '**',
    redirectTo: '',
  });

  return routes;
}

export const routes: Routes = generateComponentRoutes();
