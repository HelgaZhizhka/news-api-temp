import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private readonly controller: AppController;
    private readonly view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sourcesElement = document.querySelector('.sources') as HTMLElement;
        if (sourcesElement) {
            sourcesElement.addEventListener('click', (e: MouseEvent) => {
                if (e.target) {
                    this.controller.getNews(e, (data) => this.view.drawNews(data));
                }
            });
        }

        this.controller.init((data) => {
            this.view.drawSources(data);

            const firstSourceItem = sourcesElement.querySelector('.source__item');
            if (firstSourceItem) {
                const clickEvent = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window,
                });
                firstSourceItem.dispatchEvent(clickEvent);
            }
        });
    }
}

export default App; 