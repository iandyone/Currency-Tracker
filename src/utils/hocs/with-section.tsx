import { Component, ComponentType } from 'react';

export function withSection(SourceComponent: ComponentType, baseClassName: string, testid: string) {
  return class FieldSet extends Component {
    render() {
      return (
        <section className={baseClassName} data-testid={testid}>
          <SourceComponent {...this.props} />
        </section>
      );
    }
  };
}
