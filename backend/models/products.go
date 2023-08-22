package models

import (
	"errors"
	"os"
	"path/filepath"

	"github.com/jinzhu/gorm"
	"github.com/shopspring/decimal"
)

type Product struct {
	gorm.Model
	Name             string          `gorm:"size:500;null" json:"name"`
	CategoryID       int64           `json:"category_id"`
	Category         Category        `gorm:"foreignKey:CategoryID" json:"category"`
	Likes            uint64          `gorm:"size:500;null" json:"likes"`
	Description      string          `gorm:"size:1000;null" json:"description"`
	Price            decimal.Decimal `gorm:"type:decimal(10,2)" json:"price"`
	DiscountPrice    decimal.Decimal `gorm:"type:decimal(10,2)" json:"discount_price"`
	Image            []byte          `gorm:"null" json:"image"`
	Specification    string          `gorm:"size:1000;null" json:"specification"`
	DiscountPercent  decimal.Decimal `gorm:"type:decimal(10,2);default:5.0" json:"discount_percent"`
	Stars            float32         `gorm:"default:5.0" json:"stars"`
	CountUsersReview uint64          `gorm:"check:countusersreview >=1;default:1" json:"count_users_review"`
	InStock          bool            `gorm:"default:true" json:"in_stock"`
}

func (w *Product) SaveProduct() (*Product, error) {
	err := DB.Create(&w).Error
	if err != nil {
		return &Product{}, err
	}
	if err := SaveImageToFile("/backend/images", w.Name, w.Image); err != nil {
		return &Product{}, err
	}
	return w, nil
}

func (w *Product) GetDicountPrice() {
	converter := decimal.NewFromFloat(100.0)
	w.DiscountPrice = w.DiscountPercent.Div(converter).Mul(w.Price)

}

func SaveImageToFile(dirPath, filename string, imageData []byte) error {
	err := os.MkdirAll(dirPath, os.ModePerm)
	if err != nil {
		return err
	}

	filePath := filepath.Join(dirPath, filename)

	file, err := os.Create(filePath)
	if err != nil {
		return err
	}
	defer file.Close()

	_, err = file.Write(imageData)
	if err != nil {
		return err
	}
	return nil
}

func GetAllProduct() ([]Product, error) {
	var u []Product
	if err := DB.Find(&u).Error; err != nil {
		return u, errors.New("no product available")
	}
	return u, nil
}

func GetProductById(id string) (*Product, error) {
	var u Product
	if err := DB.Preload("Category").First(&u, id).Error; err != nil {
		return &u, errors.New("no product match the query")
	}
	return &u, nil
}

func UpdateProductLikes(product_id string) (*Product, error) {
	var product Product
	if err := DB.Model(&product).Where("id = ?", product_id).Error; err != nil {
		return &product, errors.New("cannot add likes to product... invalid product id passed")
	}
	product.Likes += 1
	DB.Save(&product)
	return &product, nil
}

func FilterProducts(product_name string) ([]Product, error) {
	var products []Product
	var items []Product
	err := DB.Find(&products).Error
	if err != nil {
		return products, errors.New("there is no product to display")
	}
	for _, item := range products {
		if product_name == "" || contains(item.Name, product_name) {
			items = append(items, item)
		}
	}
	return items, nil

}

func contains(s, substr string) bool {
	return len(s) >= len(substr) && s[:len(substr)] == substr
}
