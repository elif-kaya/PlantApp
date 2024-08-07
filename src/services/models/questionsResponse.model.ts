export interface QuestionsResponse {
    id: number;           // Unique identifier for the article
    title: string;        // Title of the article
    subtitle: string;     // Subtitle or category of the article
    image_uri: string;    // URI for the article's image
    uri: string;          // URI for the article or blog post
    order: number;        // Order number for sequencing
  }