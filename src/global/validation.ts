import { ArticleData } from "../types/article-types";

export const articleDataValidation = (data: ArticleData): string => {

    if (data.title.length < 2) {
        return 'Podany tytuł jest za krótki';
    };

    if (data.text.length < 10) {
        return 'Treść artykułu jest zbyt krótka';
    };

    if (data.section != 'glass' && data.section != 'welding' && data.section != 'automation' && data.section != 'programming') {
        return 'Podany typ artykułu jest nieprawidłowy';
    };

    if (data.date.length < 1) {
        return 'nieprawidłowy format daty';
    };

    return 'true';
}