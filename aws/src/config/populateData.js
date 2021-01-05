'use strict';
const AWS = require('aws-sdk');
//AWS.config.loadFromPath('./config.json');
const dynamoDb = new AWS.DynamoDB();
var uuid = require('uuid');

module.exports.data = ()=>{

    const productId = uuid.v4();
    const serviceId = uuid.v4();
    const params = {
        RequestItems: {
            "company": [
                            {
                                PutRequest: { 
                                    Item: {
                                            id: {S:uuid.v4()},
                                            getInTouch: {S:"company.getInTouch"},
                                            localization: {L:[{ M:{adress:{S:"9988 Windmill Lakes,#111, 77075"}}}]},
                                            city: {S:"Houston"},
                                            country: {S:"United States"},
                                            shortDescription: {S:"aboutus.shortDescription"},
                                            description: {S:"aboutus.summary"},
                                            email: {S:"oky-code@outlook.com"},
                                            socialMedia: {L:[{ M:{type:{S:"facebook"},id: {S:"102350544801818"}, url: {S:"https://www.facebook.com/infookycode"}, name:{S:"@infookycode"}, mobileIcon:{S:"facebook"} }},
                                                             { M:{type:{S:"linkedin"},id: {S:"fernando.pozo.ec"}, url: {S:""}, name:{S:"@infookycode"},mobileIcon:{S:"linkedin"} }},
                                                             { M:{type:{S:"youtube"},id: {S:"UCEJx4vF0hznhRk0x6N7JtBw"}, url: {S:""}, name:{S:"@infookycode"},mobileIcon:{S:"youtube"} }},
                                                             { M:{type:{S:"contactus"},id: {S:""}, url: {S:"https://calendly.com/oky-code/new-cases"}, name:{S:"Meetings"}, mobileIcon:{S:"handshake-o"} }}
                                                            ]},
                                            coordinates: {M:{latitude:{S:"-0.199056"}, longitud:{S:"-78.494206"}, description: {S:"OkyCode"}}},             
                                            isDefault: {BOOL:true},
                                            isPublished: {BOOL:true},
                                            name:{S: "aboutus.titlekyCode"},
                                            phone: {S:"+1 832 342 4393"},
                                            whatsApp:{S: "18323424393"},
                                            galleriaImages: {L:[ {M:{title: {S:"services.banner1.title"}, description: {S:"services.banner1.description"},  url: {S:"https://backend.appcrm.oky-code.com/assets/galleria/banner1.png"}, alt: {S:"Home Image"}, more: 'service/banner1'}},
                                                                 {M:{title: {S:"services.banner2.title"}, description: {S:"services.banner2.description"},  url: {S:"https://backend.appcrm.oky-code.com/assets/galleria/banner2.png"}, alt: {S:"Home Image"}, more: 'service/banner2'}},
                                                                 {M:{title: {S:"services.banner3.title"}, description: {S:"services.banner3.description"},  url: {S:"https://backend.appcrm.oky-code.com/assets/galleria/banner3.png"}, alt: {S:"Home Image"}, more: 'service/banner3'}}
                                            ]},
                                            about: {M:{
                                                            title: {S:"aboutus.title"},
                                                            subTitle: {S:"aboutus.subTitle"},
                                                            description: {S:"aboutus.summary"},
                                                            corporateValue: {L:[ {M:{title: {S:"corporate.value1.title"},subTitle: {S:"corporate.value1.subTitle"},description: {S:"corporate.value1.description"},color: {S:"#595959"}}},
                                                                                 {M:{title: {S:"corporate.value2.title"},subTitle: {S:"corporate.value2.subTitle"},description: {S:"corporate.value2.description"},color: {S:"#378a28"}}},
                                                                                 {M:{title: {S:"corporate.value3.title"},subTitle: {S:"corporate.value3.subTitle"},description: {S:"corporate.value3.description"},color: {S:"#999999"}}}
                                                                            ]},
                                                            smallImages: {L:[{M:{url: {S:"https://backend.appcrm.oky-code.com/assets/cerebro.png"}}},
                                                                             {M:{url: {S:"https://backend.appcrm.oky-code.com/assets/cerebro.png"}}}]},
                                                        }},
                                            security: {M:{imageSignIn:{S:"https://backend.appcrm.oky-code.com/assets/slideservice.jpg"},
                                                          imageConfirmCode:{S:"https://backend.appcrm.oky-code.com/assets/slideservice.jpg"}
                                                          }},
                                        }
                                    }
                            },
                       ],
            "category": 
            [
                {
                    PutRequest: { 
                        Item: {
                            id: {S:productId},
                            name: {S:"category1.title"},
                            description: {S:"category1.description"},
                            headerImage: {S:"https://binaries.okycode.org/images/slideproduct.jpg"},
                            colorName: {S:"#33cc33"},
                            path: {S:"services"},
                            mobileIcon: {S:"paint-brush"},
                            isPublished: {BOOL:true},
                            slug: "products"
                        }
                    }
                },
                {
                    PutRequest: { 
                        Item: {
                            id: {S:serviceId},
                            name: {S:"category2.title"},
                            description: {S:"category2.description"},
                            headerImage: {S:"https://backend.appcrm.oky-code.com/assets/slideservice.jpg"},
                            colorName: {S:"#d9d9d9"},
                            path: {S:"services"},
                            mobileIcon: {S:"paint-brush"},
                            isPublished: {BOOL:true},
                            slug: "services"
                        }
                    }
                }
            ],
            "service": [
                {
                    PutRequest: { 
                        Item: {
                            id: {S:uuid.v4()},
                            categoryId: {S:productId},
                            title: {S:"product1.title"},
                            shortDescription: {S:"product1.short"}, 
                            description: {S:"product1.description"},
                            isPublished: {BOOL:true},
                            imageHeader: {S:"https://binaries.okycode.org/images/slideproduct.jpg"}, 
                            mobileIcon: {S:"angle-right"},
                            slug: "cm7s",
                            parent: "products"
                        }
                    }
                },
                {
                    PutRequest: { 
                        Item: {
                            id: {S:uuid.v4()},
                            categoryId: {S:serviceId},
                            title: {S:"service1.title"},
                            shortDescription: {S:"service1.short"}, 
                            description: {S:"service1.description"},
                            isPublished: {BOOL:true},
                            imageHeader: {S:"https://backend.appcrm.oky-code.com/assets/slideservice.jpg"}, 
                            mobileIcon: {S:"angle-right"},
                            slug: "cambiar",
                            parent: "services"
                        }
                    }
                },
                {
                    PutRequest: { 
                        Item: {
                            id: {S:uuid.v4()},
                            categoryId: {S:serviceId},
                            title: {S:"service2.title"},
                            shortDescription: {S:"service2.short"}, 
                            description: {S:"service2.description"},
                            isPublished: {BOOL:true},
                            imageHeader: {S:"https://backend.appcrm.oky-code.com/assets/slideservice.jpg"}, 
                            mobileIcon: {S:"angle-right"},
                            slug: "cambiar",
                            parent: "services"
                        }
                    }
                },
                {
                    PutRequest: { 
                        Item: {
                            id: {S:uuid.v4()},
                            categoryId: {S:serviceId},
                            title: {S:"service3.title"},
                            shortDescription: {S:"service3.short"}, 
                            description: {S:"service3.description"},
                            isPublished: {BOOL:true},
                            imageHeader: {S:"https://backend.appcrm.oky-code.com/assets/slideservice.jpg"}, 
                            mobileIcon: {S:"angle-right"},
                            slug: "cambiar",
                            parent: "services"
                        }
                    }
                },
                {
                    PutRequest: { 
                        Item: {
                            id: {S:uuid.v4()},
                            categoryId: {S:serviceId},
                            title: {S:"service4.title"},
                            shortDescription: {S:"service4.short"}, 
                            description: {S:"service4.description"},
                            isPublished: {BOOL:true},
                            imageHeader: {S:"https://backend.appcrm.oky-code.com/assets/slideservice.jpg"}, 
                            mobileIcon: {S:"angle-right"},
                            slug: "cambiar",
                            parent: "services"
                        }
                    }
                }
                
            ]
            // if there are more tables, put here
        }
    };
      
    dynamoDb.batchWriteItem(params, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data);
        }
    });
        

}