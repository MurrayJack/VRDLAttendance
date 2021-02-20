export const todayID = () => {
    var date = new Date()
        .toLocaleDateString('en-AU', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        })
        .replaceAll('/', '');
    return date;
};

export const today = () => {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

export const tomorrow = () =>
    new Date(new Date().setDate(new Date().getDate() + 1));
