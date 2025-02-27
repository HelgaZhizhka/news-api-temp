import './sources.css';
import { Source } from '../../../types';

class Sources {
    draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
            
            const sourceItemName = sourceClone.querySelector('.source__item-name');
            if (sourceItemName) {
                sourceItemName.textContent = item.name;
            }

            const sourceItem = sourceClone.querySelector('.source__item');
            if (sourceItem) {
                sourceItem.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.append(fragment);
        }
    }
}

export default Sources; 