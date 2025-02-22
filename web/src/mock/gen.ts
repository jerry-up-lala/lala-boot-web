import Mock from 'mockjs';
import setupMock, {
  MockParams,
  successRWrap,
  pageRWrap,
} from '@/mock/setup-mock';
import {
  GEN_TABLE_PAGE_URL,
  GEN_TABLE_INFO_URL,
  GEN_TABLE_URL,
  GEN_COLUMN_URL,
  GEN_PREVIEW_URL,
} from '@/api/url/gen';

const genTable = {
  'id|19': /[0-9]/,
  'tableSchema': 'lala_boot',
  'tableName': '@word(5, 8)',
  'packageName': 'com.jerry.up.lala.boot',
  'className': '@title(1)',
  'functionName': '@cword(5, 8)',
  'author': '@cname',
  'tableComment': '@cword(5, 8)',
  'tableEngine': 'InnoDB',
  'tableCreateTime': '@datetime',
  'tableUpdateTime': '@datetime',
  'tableCollation': 'utf8mb4_general_ci',
};

const genTableList = Mock.mock({
  'list|15-100': [genTable],
});

const genTableSave = Mock.mock({
  'id|19': /[0-9]/,
});

const genTableInfo = Mock.mock(genTable);

const genColumnInfo = Mock.mock({
  'list|10-20': [
    {
      'columnName': '@word(4, 6)',
      'fieldName': '@word(3, 5)',
      'fieldType|1': [
        'String',
        'Integer',
        'BigDecimal',
        'Date',
        'Long',
        'Boolean',
        'Double',
        'Float',
      ],
      'fieldComment': '@cword(5, 8)',
      'fieldDictKey|1': ['STATE', 'CRUD_LIST', 'CRUD_TREE'],
      'columnKey|1': ['PRI', ''],
      'columnExtra|1': ['auto_increment', ''],
      'columnComment': '@cword(5, 8)',
      'columnType|1': [
        'varchar(255)',
        'int(11)',
        'decimal(25,2)',
        'datetime',
        'bigint(20)',
        'bit(1)',
        'double(10,2)',
        'float',
      ],
    },
  ],
});

const preview = {
  data: {
    tree: [
      {
        key: 'boot/',
        title: 'boot',
        children: [
          {
            key: 'boot/src/',
            title: 'src',
            children: [
              {
                key: 'boot/src/main/',
                title: 'main',
                children: [
                  {
                    key: 'boot/src/main/java/',
                    title: 'java',
                    children: [
                      {
                        key: 'boot/src/main/java/com/',
                        title: 'com',
                        children: [
                          {
                            key: 'boot/src/main/java/com/jerry/',
                            title: 'jerry',
                            children: [
                              {
                                key: 'boot/src/main/java/com/jerry/up/',
                                title: 'up',
                                children: [
                                  {
                                    key: 'boot/src/main/java/com/jerry/up/lala/',
                                    title: 'lala',
                                    children: [
                                      {
                                        key: 'boot/src/main/java/com/jerry/up/lala/boot/',
                                        title: 'boot',
                                        children: [
                                          {
                                            key: 'boot/src/main/java/com/jerry/up/lala/boot/service/',
                                            title: 'service',
                                            children: [
                                              {
                                                key: 'boot/src/main/java/com/jerry/up/lala/boot/service/impl/',
                                                title: 'impl',
                                                children: [
                                                  {
                                                    key: 'boot/src/main/java/com/jerry/up/lala/boot/service/impl/CrudServiceImpl.java',
                                                    title:
                                                      'CrudServiceImpl.java',
                                                    children: null,
                                                  },
                                                ],
                                              },
                                              {
                                                key: 'boot/src/main/java/com/jerry/up/lala/boot/service/CrudService.java',
                                                title: 'CrudService.java',
                                                children: null,
                                              },
                                            ],
                                          },
                                          {
                                            key: 'boot/src/main/java/com/jerry/up/lala/boot/mapper/',
                                            title: 'mapper',
                                            children: [
                                              {
                                                key: 'boot/src/main/java/com/jerry/up/lala/boot/mapper/CrudMapper.java',
                                                title: 'CrudMapper.java',
                                                children: null,
                                              },
                                            ],
                                          },
                                          {
                                            key: 'boot/src/main/java/com/jerry/up/lala/boot/bo/',
                                            title: 'bo',
                                            children: [
                                              {
                                                key: 'boot/src/main/java/com/jerry/up/lala/boot/bo/CrudExcelBO.java',
                                                title: 'CrudExcelBO.java',
                                                children: null,
                                              },
                                            ],
                                          },
                                          {
                                            key: 'boot/src/main/java/com/jerry/up/lala/boot/entity/',
                                            title: 'entity',
                                            children: [
                                              {
                                                key: 'boot/src/main/java/com/jerry/up/lala/boot/entity/Crud.java',
                                                title: 'Crud.java',
                                                children: null,
                                              },
                                            ],
                                          },
                                          {
                                            key: 'boot/src/main/java/com/jerry/up/lala/boot/ctrl/',
                                            title: 'ctrl',
                                            children: [
                                              {
                                                key: 'boot/src/main/java/com/jerry/up/lala/boot/ctrl/CrudCtrl.java',
                                                title: 'CrudCtrl.java',
                                                children: null,
                                              },
                                            ],
                                          },
                                          {
                                            key: 'boot/src/main/java/com/jerry/up/lala/boot/vo/',
                                            title: 'vo',
                                            children: [
                                              {
                                                key: 'boot/src/main/java/com/jerry/up/lala/boot/vo/CrudExportQueryVO.java',
                                                title: 'CrudExportQueryVO.java',
                                                children: null,
                                              },
                                              {
                                                key: 'boot/src/main/java/com/jerry/up/lala/boot/vo/CrudInfoVO.java',
                                                title: 'CrudInfoVO.java',
                                                children: null,
                                              },
                                              {
                                                key: 'boot/src/main/java/com/jerry/up/lala/boot/vo/CrudQueryVO.java',
                                                title: 'CrudQueryVO.java',
                                                children: null,
                                              },
                                              {
                                                key: 'boot/src/main/java/com/jerry/up/lala/boot/vo/CrudSaveVO.java',
                                                title: 'CrudSaveVO.java',
                                                children: null,
                                              },
                                            ],
                                          },
                                          {
                                            key: 'boot/src/main/java/com/jerry/up/lala/boot/access/',
                                            title: 'access',
                                            children: [
                                              {
                                                key: 'boot/src/main/java/com/jerry/up/lala/boot/access/CrudAccessConstant.java',
                                                title:
                                                  'CrudAccessConstant.java',
                                                children: null,
                                              },
                                            ],
                                          },
                                          {
                                            key: 'boot/src/main/java/com/jerry/up/lala/boot/dto/',
                                            title: 'dto',
                                            children: [
                                              {
                                                key: 'boot/src/main/java/com/jerry/up/lala/boot/dto/CrudQueryDTO.java',
                                                title: 'CrudQueryDTO.java',
                                                children: null,
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    key: 'boot/src/main/resources/',
                    title: 'resources',
                    children: [
                      {
                        key: 'boot/src/main/resources/mapper/',
                        title: 'mapper',
                        children: [
                          {
                            key: 'boot/src/main/resources/mapper/CrudMapper.xml',
                            title: 'CrudMapper.xml',
                            children: null,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    tab: [
      {
        key: 'boot/src/main/java/com/jerry/up/lala/boot/ctrl/CrudCtrl.java',
        title: 'CrudCtrl.java',
        code: 'package com.jerry.up.lala.boot.ctrl;\n\nimport com.jerry.up.lala.boot.access.CrudAccessConstant;\nimport com.jerry.up.lala.boot.service.CrudService;\nimport com.jerry.up.lala.boot.vo.CrudExportQueryVO;\nimport com.jerry.up.lala.boot.vo.CrudInfoVO;\nimport com.jerry.up.lala.boot.vo.CrudQueryVO;\nimport com.jerry.up.lala.boot.vo.CrudSaveVO;\nimport com.jerry.up.lala.framework.boot.api.Api;\nimport com.jerry.up.lala.framework.common.model.DataBody;\nimport com.jerry.up.lala.framework.common.r.PageR;\nimport com.jerry.up.lala.framework.common.r.R;\nimport com.jerry.up.lala.framework.boot.excel.ExcelUtil;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.*;\nimport org.springframework.web.multipart.MultipartFile;\n\nimport java.io.File;\nimport java.util.List;\n\n/**\n * <p>Description: crud表控制层\n *\n * @author jerry-up\n * @date 2024-07-31 17:35:03\n */\n@RestController\n@RequestMapping("/crud表")\npublic class CrudCtrl {\n\n    @Autowired\n    private CrudService crudService;\n\n    @GetMapping("/page")\n    @Api(value = "crud表-查询", accessCodes = {CrudAccessConstant.CRUD, CrudAccessConstant.CRUD_QUERY})\n    public R<PageR<CrudInfoVO>> page(CrudQueryVO crudQueryVO) {\n        PageR<CrudInfoVO> pageR = crudService.pageQuery(crudQueryVO);\n        return R.succeed(pageR);\n    }\n\n    @GetMapping("/info/{id}")\n    @Api(value = "crud表-详情", accessCodes = {CrudAccessConstant.CRUD_ADD, CrudAccessConstant.CRUD_UPDATE})\n    public R<CrudInfoVO> info(@PathVariable("id") String id) {\n        CrudInfoVO crudInfoVO = crudService.info(id);\n        return R.succeed(crudInfoVO);\n    }\n\n    @PostMapping\n    @Api(value = "crud表-新增", accessCodes = CrudAccessConstant.CRUD_ADD)\n    public R add(@RequestBody CrudSaveVO crudSaveVO) {\n        crudService.add(crudSaveVO);\n        return R.empty();\n    }\n\n    @PutMapping("/{id}")\n    @Api(value = "crud表-编辑", accessCodes = CrudAccessConstant.CRUD_UPDATE)\n    public R update(@PathVariable("id") String id, @RequestBody CrudSaveVO crudSaveVO) {\n        crudService.update(id, crudSaveVO);\n        return R.empty();\n    }\n\n    @GetMapping(value = "/excel")\n    @Api(value = "crud表-模板下载", accessCodes = CrudAccessConstant.CRUD_UPLOAD)\n    public Object excel() {\n        return ExcelUtil.template("excel" + File.separator + "crud.xlsx", "crud导入模板.xlsx");\n    }\n\n    @PostMapping(value = "/upload")\n    @Api(value = "crud表-上传", accessCodes = CrudAccessConstant.CRUD_UPLOAD)\n    public R upload(@RequestParam(value = "file") MultipartFile file) {\n        Integer result = crudService.upload(file);\n        return R.succeed(result);\n    }\n\n    @GetMapping(value = "/export")\n    @Api(value = "crud表-导出", accessCodes = CrudAccessConstant.CRUD_EXPORT)\n    public Object export(CrudExportQueryVO crudExportQueryVO) {\n        return crudService.export(crudExportQueryVO);\n    }\n\n    @DeleteMapping("/{id}")\n    @Api(value = "crud表-删除", accessCodes = CrudAccessConstant.CRUD_DELETE)\n    public R delete(@PathVariable("id") String id) {\n        crudService.delete(id);\n        return R.empty();\n    }\n\n    @DeleteMapping\n    @Api(value = "crud表-批量删除", accessCodes = CrudAccessConstant.CRUD_BATCH_DELETE)\n    public R batchDelete(@RequestBody DataBody<List<String>> dataBody) {\n        crudService.batchDelete(dataBody);\n        return R.empty();\n    }\n\n}',
      },
      {
        key: 'boot/src/main/java/com/jerry/up/lala/boot/access/CrudAccessConstant.java',
        title: 'CrudAccessConstant.java',
        code: 'package com.jerry.up.lala.boot.access;\n\n/**\n * <p>Description: 访问控制 常量\n *\n * @author jerry-up\n * @date 2024-07-31 17:35:03\n */\npublic class CrudAccessConstant {\n\n    /**\n     * crud表\n     */\n    public static final String CRUD = "CRUD";\n\n    /**\n     * crud表-查询\n     */\n    public static final String CRUD_QUERY = "CRUD:QUERY";\n\n    /**\n     * crud表-新增\n     */\n    public static final String CRUD_ADD = "CRUD:ADD";\n\n    /**\n     * crud表-编辑\n     */\n    public static final String CRUD_UPDATE = "CRUD:UPDATE";\n\n    /**\n     * crud表-导入\n     */\n    public static final String CRUD_UPLOAD = "CRUD:UPLOAD";\n\n    /**\n     * crud表-导出\n     */\n    public static final String CRUD_EXPORT = "CRUD:EXPORT";\n\n    /**\n     * crud表-删除\n     */\n    public static final String CRUD_DELETE = "CRUD:DELETE";\n\n    /**\n     * crud表-批量删除\n     */\n    public static final String CRUD_BATCH_DELETE = "CRUD:BATCH:DELETE";\n\n}\n',
      },
      {
        key: 'boot/src/main/java/com/jerry/up/lala/boot/entity/Crud.java',
        title: 'Crud.java',
        code: 'package com.jerry.up.lala.boot.entity;\n\nimport com.baomidou.mybatisplus.annotation.TableName;\nimport com.baomidou.mybatisplus.annotation.TableId;\nimport com.baomidou.mybatisplus.annotation.IdType;\nimport com.jerry.up.lala.boot.bo.CrudExcelBO;\nimport com.jerry.up.lala.boot.vo.CrudInfoVO;\nimport com.jerry.up.lala.framework.boot.entity.Entity;\nimport com.jerry.up.lala.framework.common.annotation.DataBean;\nimport lombok.Data;\nimport lombok.EqualsAndHashCode;\nimport lombok.experimental.FieldNameConstants;\nimport java.math.BigDecimal;\nimport java.util.Date;\n\n/**\n * <p>Description: crud表表\n *\n * @author jerry-up\n * @date 2024-07-31 17:35:03\n */\n@TableName(value = "crud")\n@Data\n@EqualsAndHashCode(callSuper = true)\n@FieldNameConstants\n@DataBean(targetTypes = {CrudInfoVO.class, CrudExcelBO.class})\npublic class Crud extends Entity {\n\n    /**\n     * 主键ID\n     */\n     @TableId(type = IdType.ASSIGN_ID)\n    private String id;\n\n    /**\n     * 集团ID\n     */\n    private String tenantId;\n\n    /**\n     * 输入框\n     */\n    private String input;\n\n    /**\n     * 数字输入框\n     */\n    private BigDecimal inputNumber;\n\n    /**\n     * 标签输入框\n     */\n    private String inputTags;\n\n    /**\n     * 自动补全\n     */\n    private String autoComplete;\n\n    /**\n     * 提及\n     */\n    private String mention;\n\n    /**\n     * 文本域\n     */\n    private String textArea;\n\n    /**\n     * 评分\n     */\n    private BigDecimal rate;\n\n    /**\n     * 滑动输入条\n     */\n    private Integer slider;\n\n    /**\n     * 开关\n     */\n    private String switchInfo;\n\n    /**\n     * 单选框\n     */\n    private String radio;\n\n    /**\n     * 复选框\n     */\n    private String checkboxes;\n\n    /**\n     * 选择器\n     */\n    private String selectInfo;\n\n    /**\n     * 级联选择\n     */\n    private String cascader;\n\n    /**\n     * 树选择\n     */\n    private String treeSelect;\n\n    /**\n     * 数据穿梭框\n     */\n    private String transfers;\n\n    /**\n     * 日期时间选择器\n     */\n    private Date dateTimePicker;\n\n    /**\n     * 上传\n     */\n    private String upload;\n\n}',
      },
      {
        key: 'boot/src/main/java/com/jerry/up/lala/boot/mapper/CrudMapper.java',
        title: 'CrudMapper.java',
        code: 'package com.jerry.up.lala.boot.mapper;\n\nimport com.baomidou.mybatisplus.core.mapper.BaseMapper;\nimport com.jerry.up.lala.boot.entity.Crud;\nimport org.apache.ibatis.annotations.Param;\nimport java.util.Collection;\n\n\n/**\n * <p>Description: crud表 Mapper\n *\n * @author jerry-up\n * @date 2024-07-31 17:35:03\n */\n public interface CrudMapper extends BaseMapper<Crud> {\n\n    int insertBatch(@Param("collection") Collection<Crud> collection);\n\n }',
      },
      {
        key: 'boot/src/main/resources/mapper/CrudMapper.xml',
        title: 'CrudMapper.xml',
        code: '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n\n<mapper namespace="com.jerry.up.lala.boot.mapper.CrudMapper">\n\n    <resultMap id="BaseResultMap" type="com.jerry.up.lala.boot.entity.Crud">\n        <id property="id" column="id" jdbcType="VARCHAR"/>\n        <result property="tenantId" column="tenant_id" jdbcType="VARCHAR"/>\n        <result property="input" column="input" jdbcType="VARCHAR"/>\n        <result property="inputNumber" column="input_number" jdbcType="DECIMAL"/>\n        <result property="inputTags" column="input_tags" jdbcType="VARCHAR"/>\n        <result property="autoComplete" column="auto_complete" jdbcType="VARCHAR"/>\n        <result property="mention" column="mention" jdbcType="VARCHAR"/>\n        <result property="textArea" column="text_area" jdbcType="VARCHAR"/>\n        <result property="rate" column="rate" jdbcType="DECIMAL"/>\n        <result property="slider" column="slider" jdbcType="INTEGER"/>\n        <result property="switchInfo" column="switch_info" jdbcType="VARCHAR"/>\n        <result property="radio" column="radio" jdbcType="VARCHAR"/>\n        <result property="checkboxes" column="checkboxes" jdbcType="VARCHAR"/>\n        <result property="selectInfo" column="select_info" jdbcType="VARCHAR"/>\n        <result property="cascader" column="cascader" jdbcType="VARCHAR"/>\n        <result property="treeSelect" column="tree_select" jdbcType="VARCHAR"/>\n        <result property="transfers" column="transfers" jdbcType="VARCHAR"/>\n        <result property="dateTimePicker" column="date_time_picker" jdbcType="TIMESTAMP"/>\n        <result property="upload" column="upload" jdbcType="VARCHAR"/>\n    </resultMap>\n\n    <sql id="Base_Column_List">\n        id,\n        tenant_id,\n        input,\n        input_number,\n        input_tags,\n        auto_complete,\n        mention,\n        text_area,\n        rate,\n        slider,\n        switch_info,\n        radio,\n        checkboxes,\n        select_info,\n        cascader,\n        tree_select,\n        transfers,\n        date_time_picker,\n        upload\n    </sql>\n\n    <insert id="insertBatch">\n        insert into crud(\n            id,\n            tenant_id,\n            input,\n            input_number,\n            input_tags,\n            auto_complete,\n            mention,\n            text_area,\n            rate,\n            slider,\n            switch_info,\n            radio,\n            checkboxes,\n            select_info,\n            cascader,\n            tree_select,\n            transfers,\n            date_time_picker,\n            upload\n        )\n        values\n        <foreach collection="collection" item="item" separator=",">\n            (\n                #{item.id,jdbcType=VARCHAR},\n                #{item.tenantId,jdbcType=VARCHAR},\n                #{item.input,jdbcType=VARCHAR},\n                #{item.inputNumber,jdbcType=DECIMAL},\n                #{item.inputTags,jdbcType=VARCHAR},\n                #{item.autoComplete,jdbcType=VARCHAR},\n                #{item.mention,jdbcType=VARCHAR},\n                #{item.textArea,jdbcType=VARCHAR},\n                #{item.rate,jdbcType=DECIMAL},\n                #{item.slider,jdbcType=INTEGER},\n                #{item.switchInfo,jdbcType=VARCHAR},\n                #{item.radio,jdbcType=VARCHAR},\n                #{item.checkboxes,jdbcType=VARCHAR},\n                #{item.selectInfo,jdbcType=VARCHAR},\n                #{item.cascader,jdbcType=VARCHAR},\n                #{item.treeSelect,jdbcType=VARCHAR},\n                #{item.transfers,jdbcType=VARCHAR},\n                #{item.dateTimePicker,jdbcType=TIMESTAMP},\n                #{item.upload,jdbcType=VARCHAR}\n            )\n        </foreach>\n    </insert>\n</mapper>',
      },
      {
        key: 'boot/src/main/java/com/jerry/up/lala/boot/vo/CrudQueryVO.java',
        title: 'CrudQueryVO.java',
        code: 'package com.jerry.up.lala.boot.vo;\n\nimport com.jerry.up.lala.boot.dto.CrudQueryDTO;\nimport com.jerry.up.lala.framework.common.annotation.DataBean;\nimport com.jerry.up.lala.framework.common.model.PageQuery;\nimport lombok.Data;\nimport lombok.EqualsAndHashCode;\nimport lombok.experimental.FieldNameConstants;\nimport java.math.BigDecimal;\nimport java.util.List;\n\n/**\n * <p>Description: crud表 查询 VO\n *\n * @author jerry-up\n * @date 2024-07-31 17:35:03\n */\n@Data\n@EqualsAndHashCode(callSuper = true)\n@FieldNameConstants\n@DataBean(targetTypes = CrudQueryDTO.class)\npublic class CrudQueryVO extends PageQuery {\n\n    /**\n     * 主键ID\n     */\n    private String id;\n\n    /**\n     * 集团ID\n     */\n    private String tenantId;\n\n    /**\n     * 输入框\n     */\n    private String input;\n\n    /**\n     * 数字输入框\n     */\n    private BigDecimal inputNumber;\n\n    /**\n     * 标签输入框\n     */\n    private String inputTags;\n\n    /**\n     * 自动补全\n     */\n    private String autoComplete;\n\n    /**\n     * 提及\n     */\n    private String mention;\n\n    /**\n     * 文本域\n     */\n    private String textArea;\n\n    /**\n     * 评分\n     */\n    private BigDecimal rate;\n\n    /**\n     * 滑动输入条\n     */\n    private Integer slider;\n\n    /**\n     * 开关\n     */\n    private String switchInfo;\n\n    /**\n     * 单选框\n     */\n    private String radio;\n\n    /**\n     * 复选框\n     */\n    private String checkboxes;\n\n    /**\n     * 选择器\n     */\n    private String selectInfo;\n\n    /**\n     * 级联选择\n     */\n    private String cascader;\n\n    /**\n     * 树选择\n     */\n    private String treeSelect;\n\n    /**\n     * 数据穿梭框\n     */\n    private String transfers;\n\n    /**\n     * 日期时间选择器\n     */\n    private List<String> dateTimePickerRang;\n\n    /**\n     * 上传\n     */\n    private String upload;\n\n}',
      },
      {
        key: 'boot/src/main/java/com/jerry/up/lala/boot/vo/CrudExportQueryVO.java',
        title: 'CrudExportQueryVO.java',
        code: 'package com.jerry.up.lala.boot.vo;\n\nimport com.jerry.up.lala.boot.dto.CrudQueryDTO;\nimport com.jerry.up.lala.framework.common.annotation.DataBean;\nimport lombok.Data;\nimport lombok.EqualsAndHashCode;\nimport java.util.List;\n\n/**\n * <p>Description: crud表 导出查询 VO\n *\n * @author jerry-up\n * @date 2024-07-31 17:35:03\n */\n@Data\n@EqualsAndHashCode(callSuper = true)\n@DataBean(targetTypes = CrudQueryDTO.class)\npublic class CrudExportQueryVO extends CrudQueryVO {\n\n    private List<String> ids;\n\n    /**\n     * 是否导出当前页\n     */\n    private Boolean currentPage;\n\n}',
      },
      {
        key: 'boot/src/main/java/com/jerry/up/lala/boot/dto/CrudQueryDTO.java',
        title: 'CrudQueryDTO.java',
        code: 'package com.jerry.up.lala.boot.dto;\n\nimport com.jerry.up.lala.boot.vo.CrudQueryVO;\nimport com.jerry.up.lala.framework.common.annotation.DataFormat;\nimport lombok.Data;\nimport lombok.experimental.Accessors;\nimport java.math.BigDecimal;\nimport java.util.Date;\nimport java.util.List;\n\n/**\n * <p>Description: crud表 查询 DTO\n *\n * @author jerry-up\n * @date 2024-07-31 17:35:03\n */\n@Data\n@Accessors(chain = true)\npublic class CrudQueryDTO {\n\n    private List<String> ids;\n\n    /**\n     * 主键ID\n     */\n    private String id;\n    \n    /**\n     * 集团ID\n     */\n    private String tenantId;\n    \n    /**\n     * 输入框\n     */\n    private String input;\n    \n    /**\n     * 数字输入框\n     */\n    private BigDecimal inputNumber;\n    \n    /**\n     * 标签输入框\n     */\n    private String inputTags;\n    \n    /**\n     * 自动补全\n     */\n    private String autoComplete;\n    \n    /**\n     * 提及\n     */\n    private String mention;\n    \n    /**\n     * 文本域\n     */\n    private String textArea;\n    \n    /**\n     * 评分\n     */\n    private BigDecimal rate;\n    \n    /**\n     * 滑动输入条\n     */\n    private Integer slider;\n    \n    /**\n     * 开关\n     */\n    private String switchInfo;\n    \n    /**\n     * 单选框\n     */\n    private String radio;\n    \n    /**\n     * 复选框\n     */\n    private String checkboxes;\n    \n    /**\n     * 选择器\n     */\n    private String selectInfo;\n    \n    /**\n     * 级联选择\n     */\n    private String cascader;\n    \n    /**\n     * 树选择\n     */\n    private String treeSelect;\n    \n    /**\n     * 数据穿梭框\n     */\n    private String transfers;\n    \n    /**\n     * 日期时间选择器 开始\n     */\n    @DataFormat(sourceFieldName = CrudQueryVO.Fields.dateTimePickerRang, listIndex = 0, dateType = 2)\n    private Date dateTimePickerStart;\n\n    /**\n     * 日期时间选择器 结束\n     */\n    @DataFormat(sourceFieldName = CrudQueryVO.Fields.dateTimePickerRang, listIndex = 1, dateType = 2)\n    private Date dateTimePickerEnd;\n    \n    /**\n     * 上传\n     */\n    private String upload;\n    \n}',
      },
      {
        key: 'boot/src/main/java/com/jerry/up/lala/boot/vo/CrudInfoVO.java',
        title: 'CrudInfoVO.java',
        code: 'package com.jerry.up.lala.boot.vo;\n\nimport com.fasterxml.jackson.annotation.JsonFormat;\nimport lombok.Data;\nimport lombok.experimental.Accessors;\nimport java.math.BigDecimal;\nimport java.util.Date;\n\n/**\n * <p>Description: crud表 信息 VO\n *\n * @author jerry-up\n * @date 2024-07-31 17:35:03\n */\n@Data\n@Accessors(chain = true)\npublic class CrudInfoVO {\n\n    /**\n     * 主键ID\n     */\n    private String id;\n\n    /**\n     * 集团ID\n     */\n    private String tenantId;\n\n    /**\n     * 输入框\n     */\n    private String input;\n\n    /**\n     * 数字输入框\n     */\n    private BigDecimal inputNumber;\n\n    /**\n     * 标签输入框\n     */\n    private String inputTags;\n\n    /**\n     * 自动补全\n     */\n    private String autoComplete;\n\n    /**\n     * 提及\n     */\n    private String mention;\n\n    /**\n     * 文本域\n     */\n    private String textArea;\n\n    /**\n     * 评分\n     */\n    private BigDecimal rate;\n\n    /**\n     * 滑动输入条\n     */\n    private Integer slider;\n\n    /**\n     * 开关\n     */\n    private String switchInfo;\n\n    /**\n     * 单选框\n     */\n    private String radio;\n\n    /**\n     * 复选框\n     */\n    private String checkboxes;\n\n    /**\n     * 选择器\n     */\n    private String selectInfo;\n\n    /**\n     * 级联选择\n     */\n    private String cascader;\n\n    /**\n     * 树选择\n     */\n    private String treeSelect;\n\n    /**\n     * 数据穿梭框\n     */\n    private String transfers;\n\n    /**\n     * 日期时间选择器\n     */\n    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")\n    private Date dateTimePicker;\n\n    /**\n     * 上传\n     */\n    private String upload;\n\n}',
      },
      {
        key: 'boot/src/main/java/com/jerry/up/lala/boot/vo/CrudSaveVO.java',
        title: 'CrudSaveVO.java',
        code: 'package com.jerry.up.lala.boot.vo;\n\nimport com.fasterxml.jackson.annotation.JsonFormat;\nimport com.jerry.up.lala.boot.entity.Crud;\nimport com.jerry.up.lala.framework.common.annotation.DataBean;\nimport lombok.Data;\nimport lombok.experimental.FieldNameConstants;\nimport java.math.BigDecimal;\nimport java.util.Date;\n\n/**\n * <p>Description: crud表 保存 VO\n *\n * @author jerry-up\n * @date 2024-07-31 17:35:03\n */\n@Data\n@FieldNameConstants\n@DataBean(targetTypes = Crud.class)\npublic class CrudSaveVO {\n\n    /**\n     * 主键ID\n     */\n    private String id;\n\n    /**\n     * 集团ID\n     */\n    private String tenantId;\n\n    /**\n     * 输入框\n     */\n    private String input;\n\n    /**\n     * 数字输入框\n     */\n    private BigDecimal inputNumber;\n\n    /**\n     * 标签输入框\n     */\n    private String inputTags;\n\n    /**\n     * 自动补全\n     */\n    private String autoComplete;\n\n    /**\n     * 提及\n     */\n    private String mention;\n\n    /**\n     * 文本域\n     */\n    private String textArea;\n\n    /**\n     * 评分\n     */\n    private BigDecimal rate;\n\n    /**\n     * 滑动输入条\n     */\n    private Integer slider;\n\n    /**\n     * 开关\n     */\n    private String switchInfo;\n\n    /**\n     * 单选框\n     */\n    private String radio;\n\n    /**\n     * 复选框\n     */\n    private String checkboxes;\n\n    /**\n     * 选择器\n     */\n    private String selectInfo;\n\n    /**\n     * 级联选择\n     */\n    private String cascader;\n\n    /**\n     * 树选择\n     */\n    private String treeSelect;\n\n    /**\n     * 数据穿梭框\n     */\n    private String transfers;\n\n    /**\n     * 日期时间选择器\n     */\n    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", locale = "zh", timezone = "GMT+8")\n    private Date dateTimePicker;\n\n    /**\n     * 上传\n     */\n    private String upload;\n\n}',
      },
      {
        key: 'boot/src/main/java/com/jerry/up/lala/boot/bo/CrudExcelBO.java',
        title: 'CrudExcelBO.java',
        code: 'package com.jerry.up.lala.boot.bo;\n\nimport com.jerry.up.lala.boot.entity.Crud;\nimport com.jerry.up.lala.framework.common.annotation.DataBean;\nimport com.jerry.up.lala.framework.boot.excel.ExcelFormat;\nimport lombok.Data;\nimport java.math.BigDecimal;\nimport java.util.Date;\n\n/**\n * <p>Description: crud表 Excel BO\n *\n * @author jerry-up\n * @date 2024-07-31 17:35:03\n */\n@Data\n@DataBean(targetTypes = Crud.class)\npublic class CrudExcelBO {\n\n    /**\n     * 主键ID\n     */\n    @ExcelFormat(headerAlias = "主键ID")\n    private String id;\n\n    /**\n     * 集团ID\n     */\n    @ExcelFormat(headerAlias = "集团ID", index = 1)\n    private String tenantId;\n\n    /**\n     * 输入框\n     */\n    @ExcelFormat(headerAlias = "输入框", index = 2)\n    private String input;\n\n    /**\n     * 数字输入框\n     */\n    @ExcelFormat(headerAlias = "数字输入框", index = 3)\n    private BigDecimal inputNumber;\n\n    /**\n     * 标签输入框\n     */\n    @ExcelFormat(headerAlias = "标签输入框", index = 4)\n    private String inputTags;\n\n    /**\n     * 自动补全\n     */\n    @ExcelFormat(headerAlias = "自动补全", index = 5)\n    private String autoComplete;\n\n    /**\n     * 提及\n     */\n    @ExcelFormat(headerAlias = "提及", index = 6)\n    private String mention;\n\n    /**\n     * 文本域\n     */\n    @ExcelFormat(headerAlias = "文本域", index = 7)\n    private String textArea;\n\n    /**\n     * 评分\n     */\n    @ExcelFormat(headerAlias = "评分", index = 8)\n    private BigDecimal rate;\n\n    /**\n     * 滑动输入条\n     */\n    @ExcelFormat(headerAlias = "滑动输入条", index = 9)\n    private Integer slider;\n\n    /**\n     * 开关\n     */\n    @ExcelFormat(headerAlias = "开关", index = 10)\n    private String switchInfo;\n\n    /**\n     * 单选框\n     */\n    @ExcelFormat(headerAlias = "单选框", index = 11)\n    private String radio;\n\n    /**\n     * 复选框\n     */\n    @ExcelFormat(headerAlias = "复选框", index = 12)\n    private String checkboxes;\n\n    /**\n     * 选择器\n     */\n    @ExcelFormat(headerAlias = "选择器", index = 13)\n    private String selectInfo;\n\n    /**\n     * 级联选择\n     */\n    @ExcelFormat(headerAlias = "级联选择", index = 14)\n    private String cascader;\n\n    /**\n     * 树选择\n     */\n    @ExcelFormat(headerAlias = "树选择", index = 15)\n    private String treeSelect;\n\n    /**\n     * 数据穿梭框\n     */\n    @ExcelFormat(headerAlias = "数据穿梭框", index = 16)\n    private String transfers;\n\n    /**\n     * 日期时间选择器\n     */\n    @ExcelFormat(headerAlias = "日期时间选择器", index = 17)\n    private Date dateTimePicker;\n\n    /**\n     * 上传\n     */\n    @ExcelFormat(headerAlias = "上传", index = 18)\n    private String upload;\n\n}',
      },
      {
        key: 'boot/src/main/java/com/jerry/up/lala/boot/service/CrudService.java',
        title: 'CrudService.java',
        code: 'package com.jerry.up.lala.boot.service;\n\nimport com.baomidou.mybatisplus.extension.service.IService;\nimport com.jerry.up.lala.boot.entity.Crud;\nimport com.jerry.up.lala.boot.vo.CrudExportQueryVO;\nimport com.jerry.up.lala.boot.vo.CrudInfoVO;\nimport com.jerry.up.lala.boot.vo.CrudQueryVO;\nimport com.jerry.up.lala.boot.vo.CrudSaveVO;\nimport com.jerry.up.lala.framework.common.model.DataBody;\nimport com.jerry.up.lala.framework.common.r.PageR;\nimport org.springframework.web.multipart.MultipartFile;\n\nimport java.util.List;\n\n/**\n * <p>Description: crud表 Service\n *\n * @author jerry-up\n * @date 2024-07-31 17:35:03\n */\n public interface CrudService extends IService<Crud> {\n\n    /**\n     * <p>Description: 分页查询\n     *\n     * @param crudQueryVO 查询条件\n     * @return 分页数据\n     * @author jerry-up\n     * @date 2024-07-31 17:35:03\n     * @since v1.0.0\n     */\n    PageR<CrudInfoVO> pageQuery(CrudQueryVO crudQueryVO);\n\n    /**\n     * <p>Description: 查询\n     *\n     * @param id 主键\n     * @return crud信息\n     * @author jerry-up\n     * @date 2024-07-31 17:35:03\n     * @since v1.0.0\n     */\n    CrudInfoVO info(String id);\n\n    /**\n     * <p>Description: 新增\n     *\n     * @param crudSaveVO 表单\n     * @author jerry-up\n     * @date 2024-07-31 17:35:03\n     * @since v1.0.0\n     */\n    void add(CrudSaveVO crudSaveVO);\n\n    /**\n     * <p>Description: 更新\n     *\n     * @param id 主键\n     * @param crudSaveVO 表单\n     * @author jerry-up\n     * @date 2024-07-31 17:35:03\n     * @since v1.0.0\n     */\n    void update(String id, CrudSaveVO crudSaveVO);\n\n    /**\n     * <p>Description: 删除\n     *\n     * @param id 主键\n     * @author jerry-up\n     * @date 2024-07-31 17:35:03\n     * @since v1.0.0\n     */\n    void delete(String id);\n\n    /**\n     * <p>Description: 批量删除\n     *\n     * @param dataBody 主键列表\n     * @author jerry-up\n     * @date 2024-07-31 17:35:03\n     * @since v1.0.0\n     */\n    void batchDelete(DataBody<List<String>> dataBody);\n\n    /**\n     * <p>Description: 上传文件\n     *\n     * @param file 文件\n     * @return 上传数量\n     * @author jerry-up\n     * @date 2024-07-31 17:35:03\n     * @since v1.0.0\n     */\n    Integer upload(MultipartFile file);\n\n    /**\n     * <p>Description: 导出数据\n     * @param crudExportQueryVO 查询条件\n     * @return 导出流\n     * @author jerry-up\n     * @date 2024-07-31 17:35:03\n     * @since v1.0.0\n     */\n    Object export(CrudExportQueryVO crudExportQueryVO);\n\n }',
      },
      {
        key: 'boot/src/main/java/com/jerry/up/lala/boot/service/impl/CrudServiceImpl.java',
        title: 'CrudServiceImpl.java',
        code: 'package com.jerry.up.lala.boot.service.impl;\n\nimport cn.hutool.core.collection.CollUtil;\nimport cn.hutool.core.collection.ListUtil;\nimport cn.hutool.core.date.DatePattern;\nimport cn.hutool.core.util.BooleanUtil;\nimport com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;\nimport com.baomidou.mybatisplus.core.metadata.IPage;\nimport com.baomidou.mybatisplus.core.toolkit.IdWorker;\nimport com.baomidou.mybatisplus.extension.plugins.pagination.Page;\nimport com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;\nimport com.jerry.up.lala.boot.bo.CrudExcelBO;\nimport com.jerry.up.lala.boot.dto.CrudQueryDTO;\nimport com.jerry.up.lala.boot.entity.Crud;\nimport com.jerry.up.lala.boot.mapper.CrudMapper;\nimport com.jerry.up.lala.boot.properties.UploadProperties;\nimport com.jerry.up.lala.boot.service.CrudService;\nimport com.jerry.up.lala.boot.vo.CrudExportQueryVO;\nimport com.jerry.up.lala.boot.vo.CrudInfoVO;\nimport com.jerry.up.lala.boot.vo.CrudQueryVO;\nimport com.jerry.up.lala.boot.vo.CrudSaveVO;\nimport com.jerry.up.lala.framework.boot.excel.ExcelCheckErrorBO;\nimport com.jerry.up.lala.framework.boot.excel.ExcelUtil;\nimport com.jerry.up.lala.framework.boot.page.PageUtil;\nimport com.jerry.up.lala.framework.boot.satoken.SaTokenUtil;\nimport com.jerry.up.lala.framework.common.exception.Errors;\nimport com.jerry.up.lala.framework.common.exception.ServiceException;\nimport com.jerry.up.lala.framework.common.model.DataBody;\nimport com.jerry.up.lala.framework.common.model.PageQuery;\nimport com.jerry.up.lala.framework.common.r.PageR;\nimport com.jerry.up.lala.framework.common.util.BeanUtil;\nimport com.jerry.up.lala.framework.common.util.CheckUtil;\nimport com.jerry.up.lala.framework.common.util.StringUtil;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Service;\nimport org.springframework.web.multipart.MultipartFile;\n\nimport java.math.BigDecimal;\nimport java.util.Date;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\n/**\n * <p>Description: crud表 Service 实现\n *\n * @author jerry-up\n * @date 2024-07-31 17:35:03\n */\n@Service\npublic class CrudServiceImpl extends ServiceImpl<CrudMapper, Crud> implements CrudService {\n\n    @Autowired\n    private UploadProperties uploadProperties;\n\n    @Override\n    public PageR<CrudInfoVO> pageQuery(CrudQueryVO crudQueryVO) {\n        CrudQueryDTO queryDTO = BeanUtil.toBean(crudQueryVO, CrudQueryDTO.class);\n        IPage<Crud> pageResult = pageByDTO(crudQueryVO, queryDTO);\n        try {\n            return PageUtil.toPageR(pageResult, CrudInfoVO.class);\n        } catch (Exception e) {\n            throw ServiceException.error(Errors.QUERY_ERROR, e);\n        }\n    }\n\n    @Override\n    public CrudInfoVO info(String id) {\n        Crud crud = get(id);\n        return BeanUtil.toBean(crud, CrudInfoVO.class);\n    }\n\n    @Override\n    public void add(CrudSaveVO crudSaveVO) {\n        checkCrudSaveVO(crudSaveVO);\n        try {\n            Crud crud = BeanUtil.toBean(crudSaveVO, Crud.class);\n            save(crud);\n        } catch (Exception e) {\n            throw ServiceException.error(Errors.SAVE_ERROR, e);\n        }\n    }\n\n    @Override\n    public void update(String id, CrudSaveVO crudSaveVO) {\n        checkCrudSaveVO(crudSaveVO);\n        Crud oldCrud = get(id);\n        try {\n            BeanUtil.copy(crudSaveVO, oldCrud);\n            updateById(oldCrud);\n        } catch (Exception e) {\n            throw ServiceException.error(Errors.UPDATE_ERROR, e);\n        }\n    }\n\n    @Override\n    public void delete(String id) {\n        if (StringUtil.isNull(id)) {\n            throw ServiceException.args();\n        }\n        try {\n            removeById(id);\n        } catch (Exception e) {\n            throw ServiceException.error(Errors.DELETE_ERROR, e);\n        }\n    }\n\n    @Override\n    public void batchDelete(DataBody<List<String>> dataBody) {\n        List<String> value = CheckUtil.dataNull(dataBody);\n        try {\n            remove(new LambdaQueryWrapper<Crud>().in(Crud::getId, value));\n        } catch (Exception e) {\n            throw ServiceException.error(Errors.DELETE_ERROR, e);\n        }\n    }\n\n    @Override\n    public Integer upload(MultipartFile file) {\n        List<CrudExcelBO> uploadList = ExcelUtil.read(file, CrudExcelBO.class);\n        String checkUpload = checkUpload(uploadList);\n        if (StringUtil.isNotNull(checkUpload)) {\n            throw ServiceException.error(Errors.dynamicMsgError(Errors.UPLOAD_ERROR, checkUpload));\n        }\n        try {\n            List<Crud> crudList = uploadList.stream().map(\n                    item -> {\n                        Crud crud = BeanUtil.toBean(item, Crud.class);\n                        crud.setId(IdWorker.getIdStr());\n                        crud.setCreateUser(SaTokenUtil.currentUser().getUserId());\n                        crud.setCreateTime(new Date());\n                        crud.setDeleted(false);\n                        return crud;\n                    }\n            ).collect(Collectors.toList());\n\n            List<List<Crud>> partitionList = ListUtil.partition(crudList, uploadProperties.getPartition());\n\n            partitionList.forEach(item -> getBaseMapper().insertBatch(item));\n\n            return crudList.size();\n        } catch (Exception e) {\n            throw ServiceException.error(Errors.UPLOAD_ERROR, e);\n        }\n    }\n\n    @Override\n    public Object export(CrudExportQueryVO crudExportQueryVO) {\n        CrudQueryDTO queryDTO = BeanUtil.toBean(crudExportQueryVO, CrudQueryDTO.class);\n        List<Crud> list = BooleanUtil.isTrue(crudExportQueryVO.getCurrentPage()) ?\n                pageByDTO(crudExportQueryVO, queryDTO.setIds(null)).getRecords() : listByDTO(queryDTO);\n        if (CollUtil.isEmpty(list)) {\n            throw ServiceException.error(Errors.EXPORT_EMPTY_ERROR);\n        }\n        List<CrudExcelBO> exportList = list.stream().map(item -> {\n            CrudExcelBO crudExcelBO = BeanUtil.toBean(item, CrudExcelBO.class);\n            // load extend info\n            return crudExcelBO;\n        }).collect(Collectors.toList());\n\n        String fileName = "crud表导出-" + DatePattern.PURE_DATETIME_MS_FORMAT.format(new Date()) + ".xlsx";\n        return ExcelUtil.export(fileName, exportList, CrudExcelBO.class);\n    }\n\n    private List<Crud> listByDTO(CrudQueryDTO crudQueryDTO) {\n        try {\n            LambdaQueryWrapper<Crud> queryWrapper = loadQuery(crudQueryDTO);\n            return list(queryWrapper);\n        } catch (Exception e) {\n            throw ServiceException.error(Errors.QUERY_ERROR, e);\n        }\n    }\n\n    private IPage<Crud> pageByDTO(PageQuery pageQuery, CrudQueryDTO crudQueryDTO) {\n        Page<Crud> page = PageUtil.initPage(pageQuery);\n        try {\n            LambdaQueryWrapper<Crud> queryWrapper = loadQuery(crudQueryDTO);\n            return page(page, queryWrapper);\n        } catch (Exception e) {\n            throw ServiceException.error(Errors.QUERY_ERROR, e);\n        }\n    }\n\n    private Crud get(String id) {\n        if (StringUtil.isNull(id)) {\n            throw ServiceException.args();\n        }\n        Crud crud = getById(id);\n        if (crud == null) {\n            throw ServiceException.notFound();\n        }\n        return crud;\n    }\n\n    private void checkCrudSaveVO(CrudSaveVO crudSaveVO) {\n        if (crudSaveVO == null) {\n            throw ServiceException.args();\n        }\n        // more check...\n    }\n\n    private LambdaQueryWrapper<Crud> loadQuery(CrudQueryDTO crudQueryDTO) {\n        LambdaQueryWrapper<Crud> queryWrapper = new LambdaQueryWrapper<>();\n        if (crudQueryDTO != null) {\n            List<String> ids = crudQueryDTO.getIds();\n            if (CollUtil.isNotEmpty(ids)) {\n                queryWrapper.in(Crud::getId, ids);\n            }\n\n            String id = crudQueryDTO.getId();\n            if (StringUtil.isNotNull(id)) {\n                queryWrapper.like(Crud::getId, id);\n            }\n\n            String tenantId = crudQueryDTO.getTenantId();\n            if (StringUtil.isNotNull(tenantId)) {\n                queryWrapper.like(Crud::getTenantId, tenantId);\n            }\n\n            String input = crudQueryDTO.getInput();\n            if (StringUtil.isNotNull(input)) {\n                queryWrapper.like(Crud::getInput, input);\n            }\n\n            BigDecimal inputNumber = crudQueryDTO.getInputNumber();\n            if (inputNumber != null) {\n                queryWrapper.eq(Crud::getInputNumber, inputNumber);\n            }\n\n            String inputTags = crudQueryDTO.getInputTags();\n            if (StringUtil.isNotNull(inputTags)) {\n                queryWrapper.like(Crud::getInputTags, inputTags);\n            }\n\n            String autoComplete = crudQueryDTO.getAutoComplete();\n            if (StringUtil.isNotNull(autoComplete)) {\n                queryWrapper.like(Crud::getAutoComplete, autoComplete);\n            }\n\n            String mention = crudQueryDTO.getMention();\n            if (StringUtil.isNotNull(mention)) {\n                queryWrapper.like(Crud::getMention, mention);\n            }\n\n            String textArea = crudQueryDTO.getTextArea();\n            if (StringUtil.isNotNull(textArea)) {\n                queryWrapper.like(Crud::getTextArea, textArea);\n            }\n\n            BigDecimal rate = crudQueryDTO.getRate();\n            if (rate != null) {\n                queryWrapper.eq(Crud::getRate, rate);\n            }\n\n            Integer slider = crudQueryDTO.getSlider();\n            if (slider != null) {\n                queryWrapper.eq(Crud::getSlider, slider);\n            }\n\n            String switchInfo = crudQueryDTO.getSwitchInfo();\n            if (StringUtil.isNotNull(switchInfo)) {\n                queryWrapper.like(Crud::getSwitchInfo, switchInfo);\n            }\n\n            String radio = crudQueryDTO.getRadio();\n            if (StringUtil.isNotNull(radio)) {\n                queryWrapper.like(Crud::getRadio, radio);\n            }\n\n            String checkboxes = crudQueryDTO.getCheckboxes();\n            if (StringUtil.isNotNull(checkboxes)) {\n                queryWrapper.like(Crud::getCheckboxes, checkboxes);\n            }\n\n            String selectInfo = crudQueryDTO.getSelectInfo();\n            if (StringUtil.isNotNull(selectInfo)) {\n                queryWrapper.like(Crud::getSelectInfo, selectInfo);\n            }\n\n            String cascader = crudQueryDTO.getCascader();\n            if (StringUtil.isNotNull(cascader)) {\n                queryWrapper.like(Crud::getCascader, cascader);\n            }\n\n            String treeSelect = crudQueryDTO.getTreeSelect();\n            if (StringUtil.isNotNull(treeSelect)) {\n                queryWrapper.like(Crud::getTreeSelect, treeSelect);\n            }\n\n            String transfers = crudQueryDTO.getTransfers();\n            if (StringUtil.isNotNull(transfers)) {\n                queryWrapper.like(Crud::getTransfers, transfers);\n            }\n\n            Date dateTimePickerStart = crudQueryDTO.getDateTimePickerStart();\n            if (dateTimePickerStart != null) {\n                queryWrapper.ge(Crud::getDateTimePicker, dateTimePickerStart);\n            }\n\n            Date dateTimePickerEnd = crudQueryDTO.getDateTimePickerEnd();\n            if (dateTimePickerEnd != null) {\n                queryWrapper.le(Crud::getDateTimePicker, dateTimePickerEnd);\n            }\n\n            String upload = crudQueryDTO.getUpload();\n            if (StringUtil.isNotNull(upload)) {\n                queryWrapper.like(Crud::getUpload, upload);\n            }\n\n        }\n        return queryWrapper;\n    }\n\n    private String checkUpload(List<CrudExcelBO> uploadList) {\n        if (CollUtil.isEmpty(uploadList)) {\n            return StringUtil.fontRed("导入数据不能为空");\n        }\n        Integer max = uploadProperties.getMax();\n        if (uploadList.size() > max) {\n            return StringUtil.fontRed("导入数据不能超过" + max + "条");\n        }\n        StringBuilder result = new StringBuilder();\n        for (int i = 0; i < uploadList.size(); i++) {\n            CrudExcelBO crudExcelBO = uploadList.get(i);\n            List<ExcelCheckErrorBO> rowCheckList = ExcelUtil.check(crudExcelBO, (fieldName, value) -> {\n                // check more\n                return null;\n            });\n            if (CollUtil.isNotEmpty(rowCheckList)) {\n                for (ExcelCheckErrorBO rowCheck : rowCheckList) {\n                    result.append(ExcelUtil.checkMessage(i + 1, rowCheck));\n                }\n            }\n        }\n        return result.toString();\n    }\n\n}',
      },
    ],
  },
  error: null,
};

setupMock({
  mock: true,
  setup() {
    Mock.mock(new RegExp(GEN_TABLE_PAGE_URL), 'get', (params: MockParams) => {
      return pageRWrap(params, genTableList.list);
    });
    Mock.mock(new RegExp(GEN_TABLE_INFO_URL), 'get', () => {
      return successRWrap(genTableInfo);
    });
    Mock.mock(new RegExp(GEN_TABLE_URL), 'post', () => {
      return successRWrap(genTableSave.id);
    });
    Mock.mock(new RegExp(GEN_COLUMN_URL), 'get', () => {
      return successRWrap(genColumnInfo.list);
    });
    Mock.mock(new RegExp(GEN_COLUMN_URL), 'post', () => {
      return successRWrap(null);
    });
    Mock.mock(new RegExp(GEN_PREVIEW_URL), 'get', () => {
      return preview;
    });
  },
});
