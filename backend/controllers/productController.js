import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

/**
 * Utility function: upload multiple images to Cloudinary
 */
const uploadImagesToCloudinary = async (files = []) => {
  try {
    const uploads = files.map(async (file) => {
      const result = await cloudinary.uploader.upload(file.path, {
        resource_type: "image",
      });
      return result.secure_url;
    });
    return await Promise.all(uploads);
  } catch (err) {
    throw new Error("Image upload failed: " + err.message);
  }
};

/**
 * Add Product
 */
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    // Basic validation
    if (!name || !description || !price || !category) {
      return res.status(400).json({
        success: false,
        message: "Name, description, price, and category are required.",
      });
    }

    // Collect images if available
    const imageFiles = [
      req.files?.image1?.[0],
      req.files?.image2?.[0],
      req.files?.image3?.[0],
      req.files?.image4?.[0],
    ].filter(Boolean);

    const imagesUrl = imageFiles.length
      ? await uploadImagesToCloudinary(imageFiles)
      : [];

    const productData = {
      name: name.trim(),
      description,
      category,
      subCategory: subCategory || null,
      price: Number(price),
      bestseller: bestseller === "true",
      sizes: sizes ? JSON.parse(sizes) : [], // Expecting sizes as JSON array string
      images: imagesUrl,
      createdAt: new Date(),
    };

    const product = new productModel(productData);
    await product.save();

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    console.error("Error in addProduct:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to add product",
    });
  }
};

/**
 * List all products
 */
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    return res.json({ success: true, products });
  } catch (error) {
    console.error("Error in listProducts:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch products",
    });
  }
};

/**
 * Remove product by ID
 */
const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required.",
      });
    }

    const deleted = await productModel.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    return res.json({
      success: true,
      message: "Product removed successfully",
    });
  } catch (error) {
    console.error("Error in removeProduct:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to remove product",
    });
  }
};

/**
 * Get single product by ID
 */
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required.",
      });
    }

    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    return res.json({ success: true, product });
  } catch (error) {
    console.error("Error in singleProduct:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch product",
    });
  }
};

export { addProduct, removeProduct, listProducts, singleProduct };
