const contacts=await prisma.contact.findMany({
    where:{
        OR:[
            {email:email},
            {phoneNumber: phoneNumber}
        ]
    }
});