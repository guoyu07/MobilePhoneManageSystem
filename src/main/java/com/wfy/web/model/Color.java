package com.wfy.web.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Administrator on 2017/9/2.
 */
@Entity
@Table(name = "t_color")
@JsonIgnoreProperties(ignoreUnknown = true)
@DynamicUpdate
public class Color {
    private String name;

    private List<MobileModel> mobileModels;

    public Color(String name) {
        this.name = name;
    }

    public Color() {
    }

    @OneToMany(mappedBy = "color")
    @JsonIgnore
    public List<MobileModel> getMobileModels() {
        return mobileModels;
    }

    public void setMobileModels(List<MobileModel> mobileModels) {
        this.mobileModels = mobileModels;
    }

    @Id
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
