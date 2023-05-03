async function queryParamsHandler(model, options) {
    const { author, title, source, publishedAt, id, sort, select } = options;
    const queryObject = {};

    if (id) {
        queryObject._id = id;
    }
    if (author) {
        const authors = author.split(',').map(a => new RegExp(a, 'i'));
        queryObject.author = { $in: authors };
    }

    if (title) {
        queryObject.title = {
            $regex: title,
            $options: 'i'
        };
    }

    if (source) {
        queryObject['source.name'] = {
            $regex: source,
            $options: 'i'
        };
    }

    if (publishedAt) {
        queryObject.publishedAt = { $regex: publishedAt, $options: 'i' };
    }

    let query = model.find(queryObject);

    if (sort) {
        let sortFix = sort.split(",").join(" ");
        query = query.sort(sortFix);
    }

    if (select) {
        let selectFix = select.split(",").join(" ");
        query = query.select(selectFix);
    }

    let page = Number(options.page) || 1;
    let limit = Number(options.limit) || 5;

    let skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    let apiData = await query.exec();

    return apiData;
}

module.exports = queryParamsHandler;
