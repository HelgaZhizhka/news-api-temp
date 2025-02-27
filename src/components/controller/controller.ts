import { CallbackFunction, NewsResponse, SourcesResponse } from '../../types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: CallbackFunction<SourcesResponse>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: MouseEvent, callback: CallbackFunction<NewsResponse>): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }

    init(callback: CallbackFunction<SourcesResponse>): void {
        this.getSources(callback);
    }
}

export default AppController;
