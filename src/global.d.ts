type Checkpoint = {
  status_details: string;
  meta?: Meta;
  event_timestamp: string;
  status: string;
  country_iso3: string;
  city: string;
};

type Article = {
  articleNo: string;
  articleName: string;
  articleImageUrl: string;
  quantity: number;
  price: number;
};

type DeliveryInfo = {
  articles: Article[];
  orderNo: string;
  order_date: string;
  recipient: string;
  recipient_notification: string;
  email: string;
  street: string;
  city: string;
  region: string;
  timezone: string;
  announced_delivery_date: string;
};

type Meta = {
  delivery_date: string;
  delivery_time_frame_from: string;
  delivery_time_frame_to: string;
};

type Order = {
  _id: string;
  courier: string;
  tracking_number: string;
  created: string;
  updated: string;
  checkpoints: Checkpoint[];
  delivery_info: DeliveryInfo;
  destination_country_iso3: string;
  zip_code: string;
};

type WithTestId = {
  testId?: string;
};

type WithClassName = {
  className?: string;
};

type WithHeading = {
  headingLevel: number;
};
