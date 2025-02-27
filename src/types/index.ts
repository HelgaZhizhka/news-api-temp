export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface SourcesResponse {
    status: string;
    sources: Source[];
}

export interface EverythingResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export interface LoaderOptions {
    apiKey: string;
    [key: string]: string;
}

export interface GetRespOptions {
    endpoint: string;
    options?: Record<string, string>;
}

export interface CallbackFunction<T> {
    (data: T): void;
}

export enum Endpoints {
    SOURCES = 'sources',
    EVERYTHING = 'everything',
}

export type HTMLElementEvent<T extends HTMLElement> = MouseEvent & {
    target: T;
};
