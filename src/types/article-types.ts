export interface ArticleData {
    id?: string;
    title: string;
    text: string;
    date: string;
    section: string;
}

export interface ArticleListData {
    title: string;
    date: string;
    id: string;
    section: string;
    text?: string;
    fotos: Fotos[];
}

export interface Fotos {

    id: string;
    name: string;
    orginalName: string;
    size: number;

};