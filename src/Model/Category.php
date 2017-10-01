<?php

/*
 * This file is part of the Certificationy Applicant project.
 *
 * (c) Michael COULLERET <michael.coulleret@gmail.com>
 * (c) Mickaël Andrieu <andrieu.travail@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Applicant\Model;

/**
 * Model category
 */
class Category
{
    public $name;
    public $code;

    public function __construct(int $id, string $category)
    {
        $this->code = $id;
        $this->name = $category;
    }
}
