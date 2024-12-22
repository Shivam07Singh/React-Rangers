import { adminData } from "../models/adminModel.js";

const websiteController = async (req, res) => {
    let adminId = res.locals.adminId;
    console.log("adminsed in website", adminId)
    try {
        const { editingHeroState, products } = req.body;

        console.log(editingHeroState, products)
        if (!editingHeroState || !products) {
            return res.status(400).json({
                message: "Both websitenu and websiteData are required in the request body."
            });
        }

        const admin = await adminData.findById(adminId);

        if (!admin) {
            return res.status(404).json({ message: "Admin not found." });
        }



        const websiteEntry = {
            name: editingHeroState.title,
            url: editingHeroState.image,
            products: products.map(product => ({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image
            }))
        };

        // Add the website entry to the admin's websites array

        console.log(websiteEntry)

        admin.websites.push(websiteEntry);

        await admin.save();

        res.status(200).json({ message: "Website data stored successfully." });
    } catch (error) {
        console.error("Error storing website data:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};


const websiteget = async (req, res) => {
    let adminId = res.locals.adminId;
    console.log("Admin ID in website controller", adminId)

    try {
        // Find the admin by ID
        const admin = await adminData.findById(adminId).populate('websites');

        if (!admin) {
            return res.status(404).json({ message: "Admin not found." });
        }
        // Return the websites associated with the admin
        res.status(200).json({ websites: admin.websites });
    } catch (error) {
        console.error("Error fetching website data:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};
const updateProductController = async (req, res) => {
    let adminId = res.locals.adminId;
    const { id } = req.params;
    console.log("Updating product for admin:", adminId, "Product ID:", id);

    try {
        const { editingHeroState, products } = req.body;

        if (!editingHeroState || !products) {
            return res.status(400).json({
                message: "Both editingHeroState and products are required."
            });
        }

        const admin = await adminData.findById(adminId);

        if (!admin) {
            return res.status(404).json({ message: "Admin not found." });
        }

        // Find the specific product to update
        const productIndex = admin.websites.id(id);

        if (!productIndex) {
            return res.status(404).json({ message: "Product not found." });
        }

        productIndex.name = editingHeroState.title;
        productIndex.url = editingHeroState.image;
        productIndex.products = products.map(product => ({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        }));

        await admin.save();

        res.status(200).json({ message: "Product updated successfully." });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

export { websiteController, websiteget, updateProductController };
