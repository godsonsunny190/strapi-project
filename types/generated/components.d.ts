import type { Schema, Struct } from '@strapi/strapi';

export interface DynamicZoneCta extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    targrt: Schema.Attribute.Enumeration<['_blank']>;
    text: Schema.Attribute.String;
    URL: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['Primary']>;
  };
}

export interface DynamicZoneFormNextToSection extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_form_next_to_sections';
  info: {
    displayName: 'Form_Next_To_Section';
  };
  attributes: {
    form: Schema.Attribute.Component<'shared.form', true>;
  };
}

export interface DynamicZoneHero extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    CTAs: Schema.Attribute.Component<'shared.button', true>;
    heading: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
  };
}

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copyright: Schema.Attribute.String;
  };
}

export interface GlobalNavbar extends Struct.ComponentSchema {
  collectionName: 'components_global_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    left_navbar_items: Schema.Attribute.Component<'shared.link', true>;
    logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    right_navbar_items: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface ItemsInput extends Struct.ComponentSchema {
  collectionName: 'components_items_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    name: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['text', 'email', 'password', 'textarea', 'submit']
    >;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    target: Schema.Attribute.Enumeration<['_blank']>;
    text: Schema.Attribute.String;
    URL: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['Primary']>;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copyright: Schema.Attribute.String;
  };
}

export interface SharedForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    inputs: Schema.Attribute.Component<'items.input', true>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    target: Schema.Attribute.Enumeration<['_blank']>;
    text: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dynamic-zone.cta': DynamicZoneCta;
      'dynamic-zone.form-next-to-section': DynamicZoneFormNextToSection;
      'dynamic-zone.hero': DynamicZoneHero;
      'global.footer': GlobalFooter;
      'global.navbar': GlobalNavbar;
      'items.input': ItemsInput;
      'shared.button': SharedButton;
      'shared.footer': SharedFooter;
      'shared.form': SharedForm;
      'shared.link': SharedLink;
    }
  }
}
