import BlockContent from '@sanity/block-content-to-react';
import {Block as SanityBlock} from '@sanity/types';
import AnnotationLinkEmail from './annotations/AnnotationLinkEmail';
import AnnotationLinkExternal from './annotations/AnnotationLinkExternal';
import AnnotationLinkInternal from './annotations/AnnotationLinkInternal';
import Block from './blocks/Block';
import BlockList from './blocks/BlockList';
// import BlockInlineProductMarginalia from './blocks/BlockInlineProductMarginalia.client';

type Props = {
  blocks: SanityBlock[];
  className?: string;
};

const PortableText = ({blocks, className}: Props) => {
  return (
    <BlockContent
      blocks={blocks}
      className={className}
      renderContainerOnSingleChild
      serializers={{
        // Lists
        list: BlockList,
        // Marks
        marks: {
          annotationLinkEmail: AnnotationLinkEmail,
          annotationLinkExternal: AnnotationLinkExternal,
          annotationLinkInternal: AnnotationLinkInternal,
        },
        // Block types
        types: {
          block: Block,
        },
      }}
    />
  );
};

export default PortableText;
