package controllers

import (
	"backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

type CustomUser struct {
	First_name string `json:"first_name" binding:"required"`
	Last_name  string `json:"last_name" binding:"required"`
	Email      string `json:"email" binding:"required"`
	Password   string `json:"password" binding:"required"`
}

func Register(c *gin.Context) {
	var input CustomUser
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	user := models.User{}
	user.First_name = input.First_name
	user.Last_name = input.Last_name
	user.Email = input.Email
	user.Password = input.Password
	_, err := user.SaveUser()

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "registered successfully"})
}
