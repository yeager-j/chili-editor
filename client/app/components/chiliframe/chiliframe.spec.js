import ChiliframeModule from './chiliframe';
import ChiliframeController from './chiliframe.controller';
import ChiliframeComponent from './chiliframe.component';
import ChiliframeTemplate from './chiliframe.html';

describe('Chiliframe', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ChiliframeModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ChiliframeController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ChiliframeTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ChiliframeComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ChiliframeTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ChiliframeController);
    });
  });
});
