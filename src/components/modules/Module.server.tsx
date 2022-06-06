import {SanityColorTheme, SanityModule} from '../../types';
import ModuleAccordion from './ModuleAccordion.server';
import ModuleCallout from './ModuleCallout.server';
import ModuleCallToAction from './ModuleCallToAction.server';
import ModuleCollection from './ModuleCollection.server';
import ModuleImage from './ModuleImage.server';
import ModuleInstagram from './ModuleInstagram.client';
import ModuleProduct from './ModuleProduct.server';

type Props = {
  colorTheme?: SanityColorTheme;
  imageAspectClassName?: string;
  module: SanityModule;
};

export default function Module({
  colorTheme,
  imageAspectClassName,
  module,
}: Props) {
  switch (module._type) {
    case 'module.accordion':
      return <ModuleAccordion module={module} />;
    case 'module.callout':
      return <ModuleCallout colorTheme={colorTheme} module={module} />;
    case 'module.callToAction':
      return <ModuleCallToAction module={module} />;
    case 'module.collection':
      return <ModuleCollection module={module} />;
    case 'module.image':
      return <ModuleImage module={module} />;
    case 'module.instagram':
      return <ModuleInstagram module={module} />;
    case 'module.product':
      return (
        <ModuleProduct
          imageAspectClassName={imageAspectClassName}
          module={module}
        />
      );
    default:
      return null;
  }
}
