
let cardData = JSON.parse(context.GenerativeAINode.showItinerary.text)
cardData = cardData.itinerary;
let elements = [];
for (i = 0; i < cardData.length; i++) {
    elements.push({
        "title": `DAY-${cardData[i].day} ${cardData[i].activities[0].activity_name}`,
        "image_url": "https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "subtitle": `${cardData[i].activities[0].description}`,
        "default_action":
        {
            "type": "postback",
            "title": "discard",
            "payload": "clear payload"
        },
        "buttons":
            [{
                "type": "postback",
                "title": "Select",
                "payload": `Select`
            }]
    })

    var message = {
        "type": 'template',
        "payload":
        {
            "template_type": 'carousel',
            "elements": elements
        }
    }

}

print(JSON.stringify(message));