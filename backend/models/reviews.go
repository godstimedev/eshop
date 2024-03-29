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

func GetProductReviews(product_id string) ([]Reviews, error) {
	var reviews []Reviews
	if err := DB.Find(&reviews).Where("reviewed_product= ?", product_id).Error; err != nil {
		return reviews, errors.New("not a valid product id passed as argument")
	}
	return reviews, nil
}

func SpecificProductReview(product_id, review_id string) (*Reviews, error) {
	var review Reviews
	if err := DB.Model(&review).Where("product_id = ?", product_id).Where("review_id = ?", review_id).Error; err != nil {
		return &Reviews{}, errors.New("invalid review id or invalid product id")
	}
	return &review, nil
}
