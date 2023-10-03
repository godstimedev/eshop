package controllers

import (
	"backend/models"
	"backend/utils/token"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)


func GetCart(c *gin.Context) {
	user_id, err := token.ExtractTokenID(c)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "unauthorized user! login to view cart"})
	}
	carts, err := models.GetCart(strconv.Itoa(int(user_id)))
	if err != nil {
		c.JSON(http.StatusNoContent, gin.H{"message": "user does not have any item in cart"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"status": true, "data": carts})

}

func SpecificCart(c *gin.Context) {
	user_id, err := token.ExtractTokenID(c)
	id := c.Param("id")
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "this is user is not recognized"})
	}
	cart, err := models.GetSpecificCart(strconv.Itoa(int(user_id)), id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "no cart to show"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"status": true, "data": cart})

}
