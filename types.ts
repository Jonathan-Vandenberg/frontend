export enum ListingType {
    X = "x",
    OFFER = "OFFER",
    SELL = "SELL",
    AUCTION = "AUCTION",
}

export enum ListingStatus {
    ACTIVE = "ACTIVE",
    COMPLETED = "COMPLETED",
    CANCELED = "CANCELED",
    EXPIRED = "EXPIRED",
}

export enum OrderStatus {
    EXECUTED = "EXECUTED",
    PENDING = "PENDING",
}

export enum AuctionStatus {
    ENDED = "ENDED",
    ONGOING = "ONGOING",
    PAUSED = "PAUSED",
    SCHEDULED = "SCHEDULED",
    CANCELED = "CANCELED",
}

export enum AuctionType {
    DUTCH = "DUTCH",
}

export enum BidStatus {
    ACCEPTED = "ACCEPTED",
    PENDING = "PENDING",
    REJECTED = "REJECTED",
    CANCELED = "CANCELED",
}

export interface Listing {
    id: string;
    type: ListingType;
    userId: string;
    assetId: string;
    quantity: number;
    price: number;
    status: ListingStatus;
    expirationDate?: Date;
    signature?: string;
    createdAt: Date;
    updatedAt: Date;
    auction?: Auction;
    trades: Trade[];
    listingActivities: ListingActivity[];
}

export interface Auction {
    id: string;
    listingId: string;
    status: AuctionStatus;
    createdAt: Date;
    updatedAt: Date;
    listing: Listing;
    bids: Bid[];
    auctionEvents: AuctionActivity[];
}

export interface AuctionActivity {
    id: string;
    auctionId: string;
    reference?: any;
    createdAt: Date;
    auction: Auction;
}

export interface ListingActivity {
    id: string;
    listingId: string;
    reference?: any;
    createdAt: Date;
    listing: Listing;
}

export interface Order {
    id: string;
    userId: string;
    eventId: string;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
    trades: Trade[];
}

export interface Trade {
    id: string;
    orderId: string;
    listingId: string;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
    order: Order;
    listing: Listing;
}

export interface Bid {
    id: string;
    auctionId: string;
    price: number;
    status: BidStatus;
    createdAt: Date;
    updatedAt: Date;
    auction: Auction;
}
