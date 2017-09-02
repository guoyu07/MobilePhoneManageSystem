package com.wfy.web.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Administrator on 2017/9/1.
 */
@Entity
@Table(name = "t_supplier")
@JsonIgnoreProperties(ignoreUnknown = true)
@DynamicUpdate
public class MobileModel {
    private String id;
    private String name;
    private Brand brand;
    private double buyingPrice;
    private List<RebatePrice> rebatePrices;
    private String remark;
    private boolean deleted;

    @OneToMany(mappedBy = "mobileModel")
    public List<RebatePrice> getRebatePrices() {
        return rebatePrices;
    }

    public void setRebatePrices(List<RebatePrice> rebatePrices) {
        this.rebatePrices = rebatePrices;
    }

    @ManyToOne
    @JoinColumn(name = "brand")
    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    @Column(name = "buying_price")
    public double getBuyingPrice() {
        return buyingPrice;
    }

    public void setBuyingPrice(double buyingPrice) {
        this.buyingPrice = buyingPrice;
    }

    @Column(name = "remark")
    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    @Column(name = "deleted")
    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    @Id
    @Column(name = "id")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}