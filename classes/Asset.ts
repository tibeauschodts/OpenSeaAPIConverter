/**
 * This TypeScript class represents the asset we want to send to the application.
 */
export class Asset {
    token_id: string;
    name: string;
    description: string;
    symbol: string;
    created_date: Date;
    image_url: string;
    external_link: string;
    opensea_link: string;

    // TODO: Price, Tag, Date

    constructor(
        token_id: string, 
        name: string,
        description: string, 
        symbol: string,
        created_date: Date,
        image_url: string, 
        external_link: string, 
        opensea_link: string
    ) {
        this.token_id = token_id;
        this.name = name;
        this.description = description;
        this.symbol = symbol;
        this.created_date = created_date;
        this.image_url = image_url;
        this.external_link = external_link;
        this.opensea_link = opensea_link;
    }
}