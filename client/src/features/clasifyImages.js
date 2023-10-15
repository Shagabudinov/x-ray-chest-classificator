const classifyImages = (images) => {
    const categories = {
        Normal: [],
        COVID: [],
        Lung_Opacity: [],
        Viral_Pneumonia: [],
        // Добавьте здесь другие категории и их соответствующие названия
    };

    // Группируем изображения по категориям
    images.forEach((item) => {
        if (item.includes("Normal")) {
            categories.Normal.push(item);
        } else if (item.includes("COVID")) {
            categories.COVID.push(item);
        } else if (item.includes("Lung_Opacity")) {
            categories.Lung_Opacity.push(item);
        } else if (item.includes("Viral")) {
            categories.Viral_Pneumonia.push(item);
        }
        // Добавьте здесь другие условия для других категорий
    });

    return categories;
};

export default classifyImages;
