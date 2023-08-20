import { Component, ComponentType } from 'react';

export function withSection(SourceComponent: ComponentType, baseClassName: string) {
  return class FieldSet extends Component {
    render() {
      return (
        <section className={baseClassName}>
          <div className={`${baseClassName}__container container`}>
            <div className={`${baseClassName}__body`}>
              <SourceComponent {...this.props} />
            </div>
          </div>
        </section>
      );
    }
  };
}
