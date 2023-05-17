package models

import (
	"errors"

	"github.com/jinzhu/gorm"
)

type Reviews struct {
	gorm.Model
	ReviewedProductID int64   `gorm:"null" json:"reviewed_product_id"`
	ReviewedProduct   Product `gorm:"foreignKey:ReviewedProductID" json:"reviewed_product"`
	User              User    `gorm:"foreignKey:UserID" json:"user"`
	UserID            int64   `json:"user_id"`
	Comment           string  `gorm:"size:1000;null" json:"comment"`
	Stars             float32 `gorm:"default:1.0" json:"stars"`
}

func (w *Reviews) SaveReview() (*Reviews, error) {
	err := DB.Create(&w).Error
	if err != nil {
		return &Reviews{}, err

	}
	return w, nil
}

func GetProductReviews(product_id int64) ([]Reviews, error) {
	var reviews []Reviews
	if err := DB.Where(&reviews, "reviewed_product?=", product_id).Error; err != nil {
		return reviews, errors.New("not a valid product id passed as argument")
	}
	return reviews, nil
}
