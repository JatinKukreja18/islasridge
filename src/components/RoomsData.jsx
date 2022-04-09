import featuredRoomImage from '../images/featurebRooms.jpeg'
import roomImage1 from '../images/roomImage1.jpeg'
import roomImage2 from '../images/roomImage2.jpeg'
import roomImage3 from '../images/roomImage3.jpeg'
import roomImage4 from '../images/roomImage4.jpeg'
import roomImage5 from '../images/roomImage5.jpeg'

export const roomsData = [
    {
        firstBox: true,
        name: "INDIGO",
        code: "indigo-room",
        nextPageData: {
            breadcrumbTitle: "Indigo Room",
            featuredImage: featuredRoomImage,
            roomHeading: "Indigo Room",
            roomPara: "Isla’s Ridge comprises two dwellings, with a total of five rooms. The Indigo room is a spacious room of ~226 sq ft. with a king size bed which can be separated into two single beds.  A writer’s desk overlooks an exceptional view of the ridge and land.",
            roomDescription: "Rooms at Isla’s Ridge are intentionally devoid of a TV, phones and wifi is spotty at best. No, we do not feel this is necessary to solve for. All rooms include access to the pool, garden and a large library with over 300 cookbooks.",
            roomsGallery: [roomImage1,roomImage2,roomImage3,roomImage4,roomImage5]
        }
    },
    {
        firstBox: true,
        name: "MANGO",
        code: "mango-room",
        nextPageData: {
            breadcrumbTitle: "Mango Room",
            featuredImage: featuredRoomImage,
            roomHeading: "Mango Room",
            roomPara: "Isla’s Ridge comprises two dwellings, with a total of five rooms. The Mango room is ~248 sq. ft. with a king size bed, which can be separated into two beds.",
            roomDescription: "Rooms at Isla’s Ridge are intentionally devoid of a TV, phones and wifi is spotty at best. No, we do not feel this is necessary to solve for. All rooms include access to the pool, garden and a large library with over 300 cookbooks.",
            roomsGallery: [roomImage1,roomImage2,roomImage3,roomImage4,roomImage5]
        }
    },
    {
        firstBox: false,
        name: "SAGE",
        code: "sage-room",
        nextPageData: {
            breadcrumbTitle: "Sage Room",
            featuredImage: featuredRoomImage,
            roomHeading: "Sage Room",
            roomPara: "Isla’s Ridge comprises two dwellings, with a total of five rooms. The Sage room is the same size as Indigo room and features a ridge view.  At ~226 sq. ft., it features a King size bed which can be separated into two single beds.",
            roomDescription: "Rooms at Isla’s Ridge are intentionally devoid of a TV, phones and wifi is spotty at best. No, we do not feel this is necessary to solve for. All rooms include access to the pool, garden and large library with over 300 cookbooks.",
            roomsGallery: [roomImage1,roomImage2,roomImage3,roomImage4,roomImage5]
        }
    },
    {
        firstBox: false,
        name: "CHUNNA",
        code: "chunna-room",
        nextPageData: {
            breadcrumbTitle: "Chunna Room",
            featuredImage: featuredRoomImage,
            roomHeading: "Chunna Room",
            roomPara: "Isla’s Ridge comprises two dwellings, with a total of five rooms. The Chunna room is the same size as the Mango room and features a ridge view.  At ~248 sq. ft., it features a King size bed which can be separated into two single beds. The rising sun can be viewed from a perfectly placed writer’s desk.",
            roomDescription: "Rooms at Isla’s Ridge are intentionally devoid of a TV, phones and wifi is spotty at best. No, we do not feel this is necessary to solve for. All rooms include access to the pool, garden and a large library with over 300 cookbooks.",
            roomsGallery: [roomImage1,roomImage2,roomImage3,roomImage4,roomImage5]
        }
    },
    {
        firstBox: false,
        name: "GREY",
        code: "grey-room",
        nextPageData: {
            breadcrumbTitle: "Grey Room",
            featuredImage: featuredRoomImage,
            roomHeading: "Grey Room",
            roomPara: "Isla’s Ridge comprises two dwellings, with a total of five rooms. The Grey room is the largest room, occupying the entire ground floor. At ~280 sq. ft., it features a king size bed, which can be separated into two beds, a walk-in wardrobe and private veranda on the ridge.",
            roomDescription: "Rooms at Isla’s Ridge are intentionally devoid of a TV, phones and wifi is spotty at best. No, we do not feel this is necessary to solve for. All rooms include access to the pool, garden and a large library with over 300 cookbooks.",
            roomsGallery: [roomImage1,roomImage2,roomImage3,roomImage4,roomImage5]
        }
    }
]