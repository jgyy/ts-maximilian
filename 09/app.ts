/**
 * @param {any} _
 * @param {string} _2
 * @param {PropertyDescriptor} descriptor
 * @return {PropertyDescriptor}
 */
function autobind(
    _: any,
    _2: string,
    descriptor: PropertyDescriptor,
): PropertyDescriptor {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

/** project input class */
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  /** project input constructor */
  constructor() {
    this.templateElement =
      document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;
    const importedNode =
      document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    this.titleInputElement =
      this.element.querySelector('#title') as HTMLInputElement;
    this.descriptionInputElement =
      this.element.querySelector('#description') as HTMLInputElement;
    this.peopleInputElement =
      this.element.querySelector('#people') as HTMLInputElement;

    this.configure();
    this.attach();
  }

  /** @param {Event} event */
  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  /** configure method */
  private configure() {
    this.element.addEventListener('submit', this.submitHandler.bind(this));
  }

  /** attach method */
  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput();
